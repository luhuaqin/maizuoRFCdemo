import { useContext } from "react"
import '../assets/css/index.css'
import { useNavigate } from "react-router-dom"

export default function FilmItem(props) {
  const navigate = useNavigate()
  const { poster, name, grade, actors, nation, runtime, item, filmId, globalContext } = props
  const { dispatch } = useContext(globalContext)
  return (
    <li style={{ height: '120px', flexDirection: 'row', borderBottom: 'none' }} onClick={() => {
      dispatch({
        type: 'changeDetail',
        payload: navigate(`/detail/${filmId}`)
      })
    }}>
      <div className='columnFlex' style={{ width: '25%', float: 'left'}}>
        <img src={poster} alt={name} style={{ width: '65%', borderRadius: '3px' }} />
      </div>
      <div className='columnFlex' style={{ width: '60%', float: 'right', fontSize: '14px',alignItems: 'normal', color: 'gray' }}>
        <p style={{ color: 'black' }}><b>{ name }</b> <span style={{ display: 'inline-block', backgroundColor: '#D2D6DC', color: 'white', borderRadius: '2px', fontSize: '12px', width: '20px', textAlign: 'center' }}> { item.name }</span></p>
        <p>观众评分 <font color='orange'>{ grade }</font></p>
        <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} >
          {
            actors.map(actor => 
              <span key={ actor.name }>主演：{ actor.name }</span>
            )
          }
        </p>
        <p>
          <span>{ nation }</span> | <span>{ runtime } 分钟</span>
        </p>
      </div>
      <div className='columnFlex' style={{ width: '15%', float: 'right' }}>
        <button style={{ width: '50px', height: '25px', background: 'none', borderWidth: 'thin', borderColor: '#FF5F16', borderRadius: '3px', color: '#FF5F16'}}>购票</button>
      </div>
    </li>
  )
}