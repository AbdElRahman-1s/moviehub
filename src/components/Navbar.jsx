import '../index.css'



function Navbar({darkMode,setDarkMode}) {
  return (
   <nav>
    <div className={`app-container flex justify-between pt-3 mt-2 ${!darkMode && `border-b border-gray-200`} pb-5`}>
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
      <div className='flex items-center gap-4'>
        <button 
          className='change-mode-btn'
          onClick={() => {setDarkMode(!darkMode)}}
        >{darkMode ? '🌙' : '☀️'}</button>
        <button className='px-6 py-1 rounded-2xl bg-gray-500  hover:border-gray-700 cursor-pointer mt-1 active:scale-98 transition-all'>Sign In</button>
      </div>
    </div>
   </nav>
  )
}

export default Navbar