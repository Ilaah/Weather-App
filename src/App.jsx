import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CardHead from '../components/CardHead'
import Loader from '../components/Loader'
import CardContent from '../components/CardContent'


function App() {

  const [coords, setCoords] = useState()
  const [info, setInfo] = useState()
  const [isLoading, setIsLoading] = useState(true)

  let long, lat

  useEffect(() => {

    const success = pos => {
      long = pos.coords.longitude
      lat = pos.coords.latitude
      setCoords({ lat, long })
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])



  useEffect(() => {
    if (coords !== undefined) {
      const API_KEY = '0092d4d080116e046553fc7dc4889666'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.long}&appid=${API_KEY}&units=metric`


      axios.get(URL)
        .then(res => {
          setInfo(res.data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  console.log(info)

  return (
    <div className="App">

      {isLoading ? 
        <Loader />
        :
        <div className='app__box'>

          <CardHead info={info} />
          <CardContent info = {info}/>

        </div>
      }
    </div>
  )
}

export default App