import React, { useContext } from 'react'

export default function NacBar(props) {
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
    </div>
  )
}
