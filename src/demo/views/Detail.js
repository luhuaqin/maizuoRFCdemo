import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'antd-mobile'

export default function Detail() {
  const { id } = useParams()
  const [detailObj, setDetailObj] = useState({})
  useEffect(() => {
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=484051`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      setDetailObj(res.data.data.film)
    })
  },[id])
  const { poster, name, premiereAt, filmType, grade, category, nation, runtime, synopsis } = detailObj
  return (
    <div>
      <Image src={poster} />
      <div style={{lineHeight: '25px', margin: '10px 15px', color: 'gray'}}>
        <p style={{fontSize: '20px', color: 'black'}}>
          {name}
          <span style={{ display: 'inline-block', backgroundColor: '#D2D6DC', color: 'white', borderRadius: '2px', fontSize: '12px', width: '20px', textAlign: 'center' }}> { filmType.name }</span>
          <i><font color='orange'>{grade}分</font></i>
        </p>
        <p>{category}</p>
        <p>{premiereAt}上映</p>
        <p>
          <span>{nation}</span> | 
          <span>{runtime}分钟</span>
        </p>
        <p style={{marginTop: '10px'}}>
          {synopsis}
        </p>
      </div>
    </div>
  )
}
