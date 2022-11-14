import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PickYourMovie from './components/PickMovie'
import env from 'react-dotenv'


function App() {
  const [data, setData] = useState({})
  const [pickMovie, setPickMovie] = useState([]);

  function handleSearch(query) {
    if (query.includes(' ')) {
      query = query.replace(' ', '%20')
    }
    axios.get(`http://localhost:1456/watchmode?title=${query}`)
    .then((res) => {
      if (res.data.length > 1) {
        setPickMovie(res.data)
      } else {
        axios.get(`https://api.watchmode.com/v1/title/${res.data[0]['watchmode_id']}/details/?apiKey=${env.apiKey}&append_to_response=sources`)
        .then((res) => {
          setData(res.data)
        })
      }
    })
  }

  function handleId(id) {
    axios.get(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=${env.apiKey}&append_to_response=sources`)
    .then((res) => {
      setData(res.data)
      setPickMovie([])
    })
  }

  return (
    <div className="App">
      <Navbar setData={setData} setPickMovie={setPickMovie} />
      {pickMovie.length <= 1 ? (<Home data={data} handleSearch={handleSearch}/>) : <PickYourMovie pickMovie={pickMovie} handleId={handleId}/>}
    </div>
  )

}

export default App
