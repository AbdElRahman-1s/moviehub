import { useState } from "react"

const categories = [
  "All",
  "Action",
  "Drama",
  "Horror",
  "Comedy",
  "Science fiction",
  "Romantic",
  "Documentary",
  "Adventure",
  "Crime"
]

function Typessection() {

  const [type,setType] = useState('All');


  return (
    <section>
      <div className="app-container border-b border-gray-300 pb-10">
        <div className="flex justify-between items-center mt-6">
        {categories.map((category) => {
          return(
          <span 
           className={` py-1 px-4 rounded-2xl cursor-pointer font-semibold ${
           type === category
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-200 text-black hover:bg-yellow-400 hover:text-white"
           }`}
           key={category}
           onClick={() => {setType(category)}}
           >
            {category}
            </span>
          )
        })}
        </div>
      </div>
    </section>
  )
}

export default Typessection