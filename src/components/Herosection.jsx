

function Herosection() {
  return (
    <section>
      <div className="app-container flex flex-col sm:flex-row gap-16 mt-20 items-center border-b border-gray-300 pb-16">
        {/*left hero*/}
        <div className="flex flex-col space-y-8">
          <span className="text-xs text-gray-600">Movie of the Week </span>
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl gradient-text">Oppenheimer <span className="text-xs">🎬</span></h2>
          <div className="flex items-center gap-3">
            <span className="text-yellow-400">★ 8.5</span> · <span className="text-xs text-gray-800">2023 · 3 hours</span> · <span className="bg-orange-400 p-1 rounded-lg text-gray-200 text-sm"> Historical Drama</span>
          </div>
          <p className="max-w-xl text-gray-500">The epic story of the “father of the atomic bomb” and his struggle with what he created. Directed by Christopher Nolan.</p>
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            <button className="btn-watch">
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
              </svg>
              </span> <span>Watch Now</span>
            </button>
            <button className="btn-watch"> 
              My List +
            </button>
          </div>
        </div>
        {/*right image*/}
        <div className="">
          <img 
          className="object-cover rounded-xl"
          src="https://cdn.theplaylist.net/wp-content/uploads/2023/05/08064650/Oppenheimer-Christopher-Nolan.jpg" 
          alt="movie photo" 
          />
        </div>
      </div>
    </section>
  )
}

export default Herosection