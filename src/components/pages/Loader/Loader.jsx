import './Loader.css'

function Loader() {
  return (
    <div className='loader-container'>
      <div className='cyber-loader'>
        <div className='outer-ring'></div>
        <div className='inner-ring'></div>
        <div className='center-circle'></div>
        <div className='loading-text'>Loading</div>
      </div>
    </div>
  )
}

export default Loader
