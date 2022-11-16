import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PickYourMovie from './components/PickMovie'


function App() {
  const [data, setData] = useState({})
  const [pickMovie, setPickMovie] = useState([]);

  function handleSearch(query) {
    query = query.split(' ')
    var upper = query.map((word) => {
      return word[0].toUpperCase() + word.substr(1)
    })
    upper = upper.join('%20')
    axios.get(`/watchmode?title=${upper}`)
      .then((res) => {
        if (res.data.length > 1) {
          setPickMovie(res.data)
        } else {
          axios.get(`/watchmode/title?id=${res.data[0]['watchmode_id']}`)
            .then((res) => {
              setData(res.data)
            })
        }
      })
  }

  function handleId(id) {
    console.log(id)
    axios.get(`/watchmode/title?id=${id}`)
      .then((res) => {
        setData(res.data)
        setPickMovie([])
      })

  }

  return (
    <div className="App">
      <Navbar setData={setData} setPickMovie={setPickMovie} />
      {pickMovie.length <= 1 ? (<Home data={data} handleSearch={handleSearch} />) : <PickYourMovie pickMovie={pickMovie} handleId={handleId} />}
    </div>
  )

}

export default App
