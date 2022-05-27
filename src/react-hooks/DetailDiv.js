import React, { useContext } from 'react'

export default function DetailDiv(props) {
  const { globalContext } = props
  const { state } = useContext(globalContext)
  return (
    <div className='fixedDetailDiv'>{state.filmDetail}</div>
  )
}
