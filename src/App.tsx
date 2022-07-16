import './assets/styles/custom.scss'
import './App.css'

function Navbar() {
  return (
    <>
      <nav className="bg-primary">
        <div>
          <a href="link">
            <h4>DS Catalog</h4>
          </a>
          <div>
            <ul>
              <li>
                <a href="link">HOME</a>
              </li>
              <li>
                <a href="link">Catalago</a>
              </li>
              <li>
                <a href="link">ADMIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>{' '}
    </>
  )
}

export default Navbar
