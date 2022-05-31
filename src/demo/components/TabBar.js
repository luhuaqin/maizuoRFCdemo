import React from 'react'
import '../assets/css/index.css'
import { NavLink } from 'react-router-dom'

export default function TabBar(props) {
  return (
    <div>
      <ul>
        {
          props.tabBarList.map((item, index) =>
              <li key={ item.id } 
                  className={ props.currentIndex === index ? 'active' : '' }
                  onClick={() => {
                    props.tbEvent(index)
                  }}>
                  <NavLink to={item.url} className="nav-link" activeclassname="active">{ item.text }</NavLink>
              </li>
          )
        }
      </ul>
    </div>
  )
}
