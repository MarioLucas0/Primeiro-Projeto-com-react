import 'bootstrap/js/src/collapse.js'
import './style-nav.css'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
          <div className="container-fluid">
            <a href="link" className="nav-logo-text">
              <h4>DS Catalog</h4>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#dscatalog-navbar"
              aria-controls="dscatalog-navbar"
              aria-expanded="false"
              arial-label="toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="dscatalog-navbar">
              <ul className="navbar-nav offset-md-2  main-menu">
                <li>
                  <a href="link " className="active">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="link">CATALOGO</a>
                </li>
                <li>
                  <a href="link">ADMIN</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
