import '../index.css'



function Navbar() {
  return (
   <nav>
    <div className="app-container flex justify-between mt-2 border-b border-gray-200 pb-5">
      {/*left nav*/}
      <div className='gradient-text flex items-center'>
        Filimo
      </div>
      {/*middle nav*/}
      <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
        <span className='mspan'>Explore</span>
        <span className='mspan'>Top Rated</span>
        <span className='mspan'>My list</span>
      </div>
      {/*right nav*/}
      <div className='flex items-center'>
        <button className='border border-gray-300 px-6 py-1 rounded-2xl active:bg-gray-500 active:text-white'>Sign In</button>
      </div>
    </div>
   </nav>
  )
}

export default Navbar