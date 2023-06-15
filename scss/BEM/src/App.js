import './style/all.scss'

function App() {
  return (
    <div class="wrap">
      <header>
        <div class="content content__bg--gray">Header</div>
      </header>
      <div class="row">
        <div class=" col-3">
          <div class="content content__bg--purple">左側選單</div>
        </div>
        <div class=" col-9">
          <div class="content content__bg--purple">主要內容</div>
        </div>
      </div>
      <div class="sponsor row">
        <div class="col-4">
          <div class="content content__bg--orange">贊助商</div>
        </div>
        <div class="col-4">
          <div class="content content__bg--orange">贊助商</div>
        </div>
        <div class="col-4">
          <div class="content content__bg--orange">贊助商</div>
        </div>
      </div>
      <div class="form row">
        <div class="col-6 no-gutter">
          <div class="content content__bg--purple">地圖</div>
        </div>
        <div class="col-6 no-gutter">
          <div class="content content__bg--orange">表單</div>
        </div>
      </div>
      <footer class="footer">
        <div class="content content__bg--gray">Footer</div>
      </footer>
    </div>
  )
}

export default App
