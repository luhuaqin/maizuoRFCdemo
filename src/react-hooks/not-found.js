import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    axios.get('/ajax/comingList?ci=298&limit=10&movieIds=&token=&optimus_uuid=FAC9C220DE2711EC9E9D53843325E10F07CF25A47ACF49A993AB22CD13D63150&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <div>notFound</div>
  )
}
