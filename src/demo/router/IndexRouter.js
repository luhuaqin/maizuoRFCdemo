import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Film from '../views/film/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Detail from '../views/Detail'
import NotFound from '../views/NotFound'
import ComingSoon from '../views/film/components/ComingSoon'
import NowPlaying from '../views/film/components/NowPlaying'
import Login from '../views/Login'
import CinemaSearch from '../views/CinemaSearch'
import City from '../views/City'
import FilmOrder from '../views/FilmOrder'
import GoodsOrder from '../views/GoodsOrder'
import SaleSeatTicket from '../views/SaleSeatTicket'
import RedPacket from '../views/RedPacket'
import Help from '../views/Help'
import Setting from '../views/Setting'
import Balance from '../views/Balance'

function AuthComponent({children}){ 
  return localStorage.getItem("token")? children:<Navigate to="/login"/> 
}

export default class IndexRouter extends Component {
  
  render() {
    return (
      <div>
        {this.props.children}
        <Routes>
          <Route path="" element={<Navigate to="/film"/>}/>
          <Route path="/film" element={<Film />}>
            <Route index path="*" element={<Navigate to="/film/nowplaying"/>}/> 
            <Route path="nowplaying" element={<NowPlaying/>}/> 
            <Route path="comingsoon" element={<ComingSoon/>}/>
          </Route>
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/cinemaSearch" element={<CinemaSearch />} />
          <Route path='/city' element={<City />} />
          {/* 进入center页面就拦截 */}
          {/* <Route path="/center" element={
                                  <AuthComponent> 
                                    <Center /> 
                                  </AuthComponent>
                                } /> */}
          {/* 点击个人中心新的操作项才拦截 */}
          <Route path="/center" element={<Center />} />
          <Route path="/filmOrder" element={
                                      <AuthComponent> 
                                        <FilmOrder />
                                      </AuthComponent>
                                   } />
          <Route path="/filmOrder" element={
                                      <AuthComponent> 
                                        <GoodsOrder />
                                      </AuthComponent>
                                   } />
          <Route path="/saleSeatTicket" element={
                                      <AuthComponent> 
                                        <SaleSeatTicket />
                                      </AuthComponent>
                                   } />
          <Route path="/redPacket" element={
                                      <AuthComponent> 
                                        <RedPacket />
                                      </AuthComponent>
                                   } />
          <Route path="/help" element={
                                      <AuthComponent> 
                                        <Help />
                                      </AuthComponent>
                                   } />
          <Route path="/setting" element={
                                      <AuthComponent> 
                                        <Setting />
                                      </AuthComponent>
                                   } />
          <Route path="/balance" element={
                                      <AuthComponent> 
                                        <Balance />
                                      </AuthComponent>
                                   } />
          <Route path='/login' element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      
    )
  }
}
