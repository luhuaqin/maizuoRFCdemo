import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import FilmItem from '../component/FilmItem'
import NacBar from '../component/NacBar'
import '../css/index.css'
import LSwiper from '../global-ui/LSwiper/LSwiper'
import LSwiperItem from '../global-ui/LSwiper/LSwiperItem'
// import DetailDiv from './DetailDiv'

const globalContext = React.createContext()

const reducer = (prevState, action) => {
  const newState = { ...prevState }
  switch(action.type) {
    case 'changeDetail':
      newState.filmDetail = action.value
      return newState
    case 'updateFilmList':
      newState.filmList = action.value
      return newState
    case 'changeTab':
      newState.currentTab = action.value
      newState.filmDetail = ''
      return newState
    case 'getBannerList':
      newState.bannerList = action.value
      return newState
    default:
      return prevState
  }
}

const initState = {
  filmDetail: '',
  filmList: [],
  currentTab: 1,
  bannerList: []
}

export default function Film() {
  // const [currentTab, setCurrentTab] = useState(1)
  // const [filmList, setFilmList] = useState([])
  // const [filmDetail, setFilmDetail] = useState('')
  const [state, dispatch] = useReducer(reducer, initState)
  
  useEffect(() => {
    if(state.currentTab === 1) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4669658",
        method: "get",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        dispatch({
          type: 'updateFilmList',
          value: res.data.data.films
        })
      })
    }else {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5910792',
        method: 'get',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        dispatch({
          type: 'updateFilmList',
          value: res.data.data.films
        })
      })
    }
  }, [state.currentTab])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&k=9138870',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
        'X-Host': 'mall.cfg.film-float.banner'
      }
    }).then(res => {
      const list = []
      list.push(res.data.data)
      dispatch({
        type: 'getBannerList',
        value: list
      })
    })
  },[])
  return (
    <globalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
            <LSwiper loop={true}>
              {
                state.bannerList.map((item) => {
                  return <LSwiperItem key={item.bannerId}>
                    <img alt={item.name} src={item.imgUrl} style={{ width: '100%', height: '200px' }} />
                  </LSwiperItem>
                })
              }
            </LSwiper>
          </div>
        <NacBar globalContext={globalContext} />
        <div>
          <ol>
            {
              state.filmList.map(item => {
                return <FilmItem key={item.filmId} { ...item } currentTab={state.currentTab} globalContext={globalContext} />
              })
            }
          </ol>
        </div>
        {/* <DetailDiv globalContext={globalContext} /> */}
      </div>
    </globalContext.Provider>
  )
}


