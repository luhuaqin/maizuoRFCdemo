import React from 'react'
import FilmItem from '../../../components/FilmItem'

export default function NowPlaying(props) {
  console.log(props)
  const { filmList, currentTab, globalContext } = props
  return (
    <div>
      {
        filmList.map(item => {
          return <FilmItem key={item.filmId} { ...item } currentTab={currentTab} globalContext={globalContext}  />
        })
      }
    </div>
  )
}
