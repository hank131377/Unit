import './style/all.scss'

function App() {
  return (
    <div className="wrap">
      <main className="flex mt-20">
        <article>
          <ul>
            <li className="flex mtb-24 mt-0">
              <div className="new_img">
                <img src="https://fakeimg.pl/96/" />
              </div>
              <div className="content mlr-20">
                <h2 className="title">Title Lorem</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  fugit, repellat, commodi culpa consequuntur, sit velit
                  reiciendis..
                </p>
              </div>
            </li>
            <li className="flex mtb-24">
              <div className="new_img">
                <img src="https://fakeimg.pl/96/" className="new_img" />
              </div>
              <div className="content mlr-20">
                <h2 className="title">Title Lorem</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  fugit, repellat, commodi culpa consequuntur, sit velit
                  reiciendis..
                </p>
              </div>
            </li>
          </ul>
        </article>
        <aside>
          <div className="adv_img">
            <img src="https://fakeimg.pl/216/" />
          </div>
        </aside>
      </main>
      <footer>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          eveniet? Corrupti libero quidem, non, officiis ea tempore suscipit cum
          quisquam animi id dicta voluptatem ab exercitationem consectetur magni
          deleniti odio. Voluptatum perspiciatis sequi, reprehenderit doloremque
          veritatis consequuntur amet quod. A, rerum. Doloribus natus saepe,
          sequi corrupti veritatis reiciendis veniam rem.
        </p>
      </footer>
      <div className="container">
        <div className="box box-1"></div>
        <div className="box box-2"></div>
        <div className="box box-3"></div>
        <div className="box box-4"></div>
        <div className="box box-5"></div>
      </div>
      <div>
        <div className="box box-primary"></div>
        <div className="box box-danger"></div>
        <div className="box box-secondary"></div>
      </div>
    </div>
  )
}

export default App
