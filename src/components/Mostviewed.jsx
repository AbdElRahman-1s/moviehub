const Mostsee = [{
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
}
];


function Mostviewed() {
  return (
    <section>
      <div className="app-container pb-10 border-b border-gray-300">
        {/*top cards*/}
        <div className="flex items-center justify-between mt-5">
          <span className="text-sm font-medium text-black">Most Watched</span>
          <span className="text-sm text-gray-400 cursor-pointer hover:underline hover:text-gray-900">View All ›</span>
        </div>
        {/*cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-4">
          {Mostsee.map((mv, i) => {
            return (
              <div key={i} className="border border-gray-400 hover:-translate-y-1 transition">
                <img
                  className="h-"
                  src={mv.image}
                  alt={mv.title}
                />
                <div className="flex gap-4 p-4 justify-around items-center">
                <h3 className="text-2xl font-semibold">{mv.title}</h3>
                <span className="text-yellow-300">{mv.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Mostviewed