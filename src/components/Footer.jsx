

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-400 mt-24 py-6">
      <div className="app-container">
        <div className="flex justify-between items-center">
          <a href="#">
        <h3 className="gradient-text">Filimo</h3>
        </a>
        <div className="space-x-10 text-sm font-medium ">
          <a href="#hero">
          <span className="hover:text-gray-900 cursor-pointer">Week Movie</span>
          </a>
          <a href="#most">
          <span className="hover:text-gray-900 cursor-pointer">Most Viewed</span>
          </a>
          <a href="#movies">
          <span className="hover:text-gray-900 cursor-pointer">All Movies</span>
          </a>
        </div>
        <span>© 2026</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer