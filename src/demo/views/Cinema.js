import React, { useEffect, useMemo, useState } from 'react'
import BScroll from 'better-scroll'
import axios from 'axios'
import '../assets/css/index.css'
import { NavBar, Space } from 'antd-mobile'
import { SearchOutline, DownOutline } from 'antd-mobile-icons'
import CinemaListContainer from './film/components/CinemaListContainer'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

function useCinemaList() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6971770",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      const optCinemaList = [ ...res.data.data.cinemas ]
      let backToNum = ''
      let frontToNum = ''
      optCinemaList.forEach(item => {
        frontToNum = item.lowPrice.toString().slice(0, 2)
        backToNum = item.lowPrice.toString().slice(2)
        item.lowPrice = frontToNum + '.' + backToNum

        item.Distance = item.Distance.toFixed(2)
      })
      setList(optCinemaList)
      new BScroll('.container')
    })
  },[])
  return {
    list
  }
}

function useCinemaListFilter(cinemaList, text) {
  const getCinemaList = useMemo(() => cinemaList.filter(item => {
    return item.name.toUpperCase().includes(text.toUpperCase()) ||
           item.address.toUpperCase().includes(text.toUpperCase())
  }), [cinemaList, text])
  return {
    getCinemaList
  }
}



function Cinema(props) {
  const [text] = useState('')
  const { list } = useCinemaList()
  const { getCinemaList } = useCinemaListFilter(list, text)
  const navigate = useNavigate()
  const { cityName } = props

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline onClick={() => {
          navigate('/cinemaSearch')
        }}/>
      </Space>
    </div>
  )

  const left = (
    <div style={{fontSize: 16}}>
      <Space style={{ '--gap': '16px' }} onClick={() => {
          navigate('/city')
        }}>
        <span>{cityName}</span>
        <DownOutline />
      </Space>
    </div>
  )

  return (
    <div>
      <NavBar right={right} back={null} left={left}>
        影院
      </NavBar>
      
      <div className='container' 
            style={{
              height: window.innerHeight - 130
            }}
      >
        <ol>
          <CinemaListContainer getCinemaList={getCinemaList} />
        </ol>
      </div>
    </div>
  )
}

export default connect((state)=>{
	return {
		cityName: state.CityReducer.cityName
	}
},{
})(Cinema)
