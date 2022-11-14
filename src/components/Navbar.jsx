
export default function Navbar(props) {
  const { setData, setPickMovie } = props
  return (
    <div id="navbar">
      <div className="navbar-container" onClick={(e) => {
        e.preventDefault()
        setData({})
        setPickMovie([])
      }}>
        <div className="navbar-title">WhatsItOn?</div>
      </div>
    </div>
  )
}