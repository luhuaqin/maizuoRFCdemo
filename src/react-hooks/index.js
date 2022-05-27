import React, { useState } from 'react'
import Film from './useEffectPractice'
import Cinema from './useMemoPractice'
import TabBar from './TabBar'
import Center from './Center'

export default function App() {
  const [tabBarList] = useState([
    {
      id: 1,
      text: '电影'
    },
    {
      id: 2,
      text: '影院'
    },
    {
      id: 3,
      text: '我的'
    }
  ])
  const [currentIndex, setCurrentIndex] = useState(0)

  function useWhich() {
    switch(currentIndex) {
      case 0:
        return <Film />
      case 1:
        return <Cinema />
      case 2:
        return <Center />
      default:
        return null
    }
  }

  return (
    <div>
      {
        useWhich()
      }
      <TabBar tbEvent={(index) => {
                setCurrentIndex(index)
              }} 
              bottomList={ tabBarList } 
              currentIndex={ currentIndex } 
      />
    </div>
  )
}
