import React, { useEffect, useMemo, useState } from 'react'
import BScroll from 'better-scroll'
import axios from 'axios'
import '../assets/css/index.css'
import CinemaListContainer from './film/components/CinemaListContainer'
import { SearchBar } from 'antd-mobile'

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

export default function CinemaSearch() {
  const [text, setText] = useState('')
  const { list } = useCinemaList()
  const { getCinemaList } = useCinemaListFilter(list, text)

  return (
    <div>
      <div  style={{ 
              padding: '10px'
      }}>
        <SearchBar placeholder='请输入内容' showCancelButton={() => true} value={text} onChange={(value) => {
            setText(value)
          }}/>
      </div>
      

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
