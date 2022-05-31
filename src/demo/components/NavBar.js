import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/index.css'

export default function NavBar(props) {
  const { globalContext } = props
  const { state, dispatch } = useContext(globalContext)
  return (
    <div style={{
      height: '50px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      lineHeight: '50px'
    }}>
      <NavLink to="nowplaying" className="nav-link" activeclassname="active">
        <span style={{ 
          display: 'inline-block', 
          borderBottom: state.currentTab === 1 && '2px solid #FF5F16',
          color: state.currentTab === 1 && '#FF5F16'
        }} onClick={() => {
          dispatch({
            type: 'changeTab',
            value: 1
          })
        }}>正在热映</span>
      </NavLink>
      <NavLink to='comingsoon' className="nav-link" activeclassname="active">
        <span style={{ 
          display: 'inline-block', 
          borderBottom:  state.currentTab === 2 && '2px solid #FF5F16',
          color: state.currentTab === 2 && '#FF5F16'
        }} onClick={() => {
          dispatch({
            type: 'changeTab',
            value: 2
          })
        }}>即将上映</span>
      </NavLink>
      
    </div>
  )
}
