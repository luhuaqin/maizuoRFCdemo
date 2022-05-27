import React from 'react'
import '../css/index.css'

export default function TabBar(props) {
  return (
    <div>
      <ul>
        {
          props.bottomList.map((item, index) => 
            <li key={ item.id } 
                className={ props.currentIndex === index ? 'active' : '' }
                onClick={() => {
                  props.tbEvent(index)
                }}>
              { item.text }
            </li>
          )
        }
      </ul>
    </div>
  )
}
