import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleDel = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>
      <input value={text} onChange={ handleChange } />
      <button onClick={() => {
        setList([...list, text])
        setText('')
      }}>add</button>
      <ol>
        {
          list.map((item, index) => {
            return (
              <li key={item}>
                {item}
                <button onClick={() => handleDel(index)}>del</button>
              </li>
            )
          })
        }
      </ol>
      {!list.length && <div>暂无数据</div>}
    </div>
  )
}
