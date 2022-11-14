export default function Results(props) {
  const { data } = props;
  const embedUrl = data.trailer.split('watch?v=')[1]
  return (
    <div id="results">
      <div className="title-name">{data.original_title}</div>
      <div className="available-container">
        <img className="title-poster" src={data.poster} alt={`${data.original_title} poster`}></img>
        <div className="streaming-container">
          <div className="streaming-title">Streaming now on:</div>
          {data.sources.map((source, i) => {
            return (
              <a href={source.web_url} className="streaming-link" key={i + 100}>
                {source.type === 'sub' ? <div className="streaming-site"key={i}>{source.name}</div> : null}
              </a>
            )
          })}
        </div>
      </div>
      <div className="purchase-container">
          <div className="purchase-title">Also available for purchase on:</div>
          {data.sources.map((source, i) => {
            return (
              <a href={source.web_url} className="purchase-link" key={i + 100}>
                {source.type === 'buy' ? <div className="purchase-site">{source.name} {source.format} for ${source.price}</div> : null}
              </a>
            )
          })}
        </div>
      <div className="trailer-title">Trailer</div>
      <div className="video-container">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${embedUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="title-info">
        <div className="more-info">More Info</div>
        <div className="title-description-container">
          {data.genre_names.map((genre) => {
            return (
            <div className="title-category">{genre}</div>
            )
          })}
          <div className="title-desc">{data.plot_overview}</div>
          <div className="title-rating">{data.us_rating}</div>
        </div>
      </div>
    </div>
  )
}