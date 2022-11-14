import { useState } from 'react'

export default function Search(props) {
  const { handleSearch } = props
  const [query, setQuery] = useState('')

  return (
    <div id="#search">
        <form className="search-container" onSubmit={(e) => {
          e.preventDefault()
          handleSearch(query)
        }}>
          <input className="search-bar" type="text" placeholder="Movie/TV Show" value={query} onChange={(e) => {
            e.preventDefault()
            setQuery(e.target.value)
          }}></input>
          <button className="search-button">Search</button>
        </form>
    </div>
  )
}