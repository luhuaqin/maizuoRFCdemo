import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

function City(props) {
  const navigate = useNavigate()
  const [cityList] = useState(['北京', '杭州', '广州', '深圳', '大连'])
  return (
    <div>
      <ol>
        {
            cityList.map(item=>
            <li key={item} onClick={()=>{
                props.changeCityName(item)
                navigate('/cinema')
            }}>{item}</li>    
            )
        }
            </ol>
    </div>
  )
}

export default connect(null, {
  changeCityName(cityName) {
    return {
      type:"cityChange",
      payload:cityName
    }
  }
})(City)
