import Results from './Results'
import Search from './Search'


export default function Home(props) {
  const { data, handleSearch } = props
  return Object.keys(data).length === 0 ? (
    <div id="home">
      <div className="home-container">
        <div className="home-description">Looking for a movie or show and can't find out what streaming platform it's on? WhatsItOn will tell you all the places where you can enjoy your show at!</div>
        <Search handleSearch={handleSearch} />

        <div className="home-header">How does it work?<div className="home-instructions">Just type the name of your movie or TV show in the search bar and hit enter, we will do the rest for you and display the results here!</div></div>
      </div>
    </div>
  ) : (
    <>
      <Search handleSearch={handleSearch} />
      <Results data={data} />
    </>
  )
}