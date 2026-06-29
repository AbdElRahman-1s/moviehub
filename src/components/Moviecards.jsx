const movieCards = [{
  title: 'The Dark Night',
  image: 'https://a.ltrbxd.com/resized/sm/upload/78/y5/zg/ej/oefdD26aey8GPdx7Rm45PNncJdU-0-2000-0-3000-crop.jpg?v=2d0ce4be25',
  rating: '★ 9.1'
},
{
  title: 'Fight Club',
  image: 'https://a.ltrbxd.com/resized/film-poster/5/1/5/6/8/51568-fight-club-0-2000-0-3000-crop.jpg?v=768b32dfa4',
  rating: '★ 8.8'
},
{
  title: 'Forest Gump',
  image: 'https://a.ltrbxd.com/resized/film-poster/2/7/0/4/2704-forrest-gump-0-2000-0-3000-crop.jpg?v=173bc04cf0',
  rating: '★ 8.8'
},
{
  title: 'Interstellar',
  image: 'https://a.ltrbxd.com/resized/film-poster/1/1/7/6/2/1/117621-interstellar-0-2000-0-3000-crop.jpg?v=7ad89e6666',
  rating: '★ 8.7'
},
{
  title: 'The Shawshank Redemption',
  image: 'https://a.ltrbxd.com/resized/sm/upload/7l/hn/46/uz/zGINvGjdlO6TJRu9wESQvWlOKVT-0-2000-0-3000-crop.jpg?v=8736d1c395',
  rating: '★ 9.3'
},
{
  title: 'The Invisible Guest',
  image: 'https://a.ltrbxd.com/resized/sm/upload/n6/a1/rw/4w/fptnZJbLzKUHeNlYrAynbyoL5YJ-0-2000-0-3000-crop.jpg?v=f137276960',
  rating: '★ 8.0'
},
{
  title: 'Scent of a Woman',
  image: 'https://a.ltrbxd.com/resized/film-poster/4/7/1/2/3/47123-scent-of-a-woman-0-2000-0-3000-crop.jpg?v=444f663843',
  rating: '★ 8.0'
},
{
  title: 'Parasite',
  image: 'https://a.ltrbxd.com/resized/film-poster/4/2/6/4/0/6/426406-parasite-0-2000-0-3000-crop.jpg?v=8f5653f710',
  rating: '★ 8.5'
},
{
  title: 'Oppenheimer',
  image: 'https://a.ltrbxd.com/resized/film-poster/7/8/4/3/2/8/784328-oppenheimer-0-2000-0-3000-crop.jpg?v=e3c6e7a32c',
  rating: '★ 8.5'
},
{
  title: '12 Angry Men',
  image: 'https://a.ltrbxd.com/resized/film-poster/5/1/7/0/0/51700-12-angry-men-0-2000-0-3000-crop.jpg?v=b8aaf291a9',
  rating: '★ 9.0'
},
{
  title: 'The Truman Show',
  image: 'https://a.ltrbxd.com/resized/sm/upload/xx/io/jp/45/the-truman-show-0-2000-0-3000-crop.jpg?v=704ba393f7',
  rating: '★ 8.2'
},
{
  title: 'Joker',
  image: 'https://a.ltrbxd.com/resized/film-poster/4/0/6/7/7/5/406775-joker-0-2000-0-3000-crop.jpg?v=e4ea7f98cc',
  rating: '★ 8.3'
}
];

function Moviecards() {
  return (
    <section>
      <div className="app-container mt-6">
        <div className="relative max-w-52 mb-8">
          <input
            className="ring-2 focus:outline-none p-1 ring-gray-300 rounded-2xl px-3 bg-gray-300 hover:shadow-lg focus:shadow-lg"
            type="text"
          />
          <span className="absolute right-3 top-1.5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
            </svg>
          </span>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-4">
          {movieCards.map((mc,i) => {
            return(
              <div key={i} className="border border-gray-400 hover:-translate-y-1 transition">
                <img
                  src={mc.image}
                  alt={mc.title}
                />
                <div className="flex gap-4 p-4 justify-around items-center">
                <h3 className="text-2xl font-semibold">{mc.title}</h3>
                <span className="text-yellow-300">{mc.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Moviecards