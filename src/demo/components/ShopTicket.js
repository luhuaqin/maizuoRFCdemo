import React from 'react'
import '../assets/css/index.css'

export default function ShopTicket() {
  return (
    <div style={{
      height: '50px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      lineHeight: '50px', 
      backgroundColor: '#FF5F16',
      color: '#fff',
      fontSize: 18
    }}>
        <span style={{ 
          display: 'inline-block'
        }}>选座购票</span>
    </div>
  )
}
