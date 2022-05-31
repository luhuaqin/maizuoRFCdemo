import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ShopTicket from './components/ShopTicket'
// import { NavLink } from 'react-router-dom'
import TabBar from './components/TabBar'
import LRouter from './router/IndexRouter'
// import Film from './views/film/Film'
// import Cinema from './views/Cinema'
// import Center from './views/Center'

export default function App() {
  const location = useLocation()
  const [tabBarList] = useState([
    {
      id: 1,
      text: '电影',
      url: '/film'
    },
    {
      id: 2,
      text: '影院',
      url: '/cinema'
    },
    {
      id: 3,
      text: '我的',
      url: '/center'
    }
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  // function useWhich() {
  //   switch(currentIndex) {
  //     case 0:
  //       return <NavLink to='/film'><Film /></NavLink>
  //     case 1:
  //       return <NavLink to='/film'><Cinema /></NavLink>
  //     case 2:
  //       return <NavLink to='/film'><Center /></NavLink>
  //     default:
  //       return null
  //   }
  // }

  return (
    <div>
      <LRouter>
        {
          location.pathname.includes('login') ? '' : (location.pathname.includes('detail') ? <ShopTicket /> : 
              <TabBar tabBarList={tabBarList} currentIndex={currentIndex} 
                tbEvent={(index) => {
                setCurrentIndex(index)
              }} />)
        }
        
      </LRouter>
    </div>
  )
}
