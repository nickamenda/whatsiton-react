
export default function PickYourMovie(props) {
  const { pickMovie, handleId } = props
  return (
    <div id="pick-movie">
      <div className="pick-movie-title">Sorry, please choose which movie / TV show you were looking for.</div>
      <div className="pick-movie-container">
          {pickMovie.map((movie, i) => {
            return (
              <div onClick={(e) => {
                e.preventDefault()
                handleId(movie.watchmode_id)
              }} className="movie-item" key={i}>{movie.title}, {movie.year}, {movie.type === 'tv' ? 'TV show' : 'Movie'}</div>
            )
          })}
      </div>

    </div>
  )
}