import React, { useReducer } from 'react'

const reducer = (prevState, action) => {
  const optState = { ...prevState }
  switch(action.type) {
    case 'sub-count':
      optState.count--
      return optState;
    case 'add-count':
      optState.count++
      return optState;
    default:
      return prevState
  }
}

const initState = {
  count: 0,
  // list: []
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'sub-count'
        })
      }}>-1</button>

      {state.count}
      
      <button onClick={() => {
        dispatch({
          type: 'add-count'
        })
      }}>+1</button>
    </div>
  )
}
