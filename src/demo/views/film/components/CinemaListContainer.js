import React from 'react'

export default function CinemaListContainer(props) {
  const { getCinemaList } = props
  return (
    <div>
      {
        getCinemaList.map(item => {
          return (
            <li key={ item.cinemaId }>
              <div className='topText'>
                <span style={{ width: 'calc(100% - 100px)' }}>{ item.name }</span>
                <span style={{ color: 'orange' }}>{ '￥' + item.lowPrice + ' 起' }</span>
              </div>
              <div className='bottomText'>
                <span style={{ width: 'calc(100% - 100px)', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{ item.address }</span>
                <span>{ item.Distance + ' km' }</span>
              </div>
            </li>
          )
        })
      }
    </div>
  )
}
