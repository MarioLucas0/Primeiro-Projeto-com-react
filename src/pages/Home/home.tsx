import Navbar from 'components/Navbar/navbar'
import ButtonHome from 'components/ButtonHome/button'
import './style-home.css'
import { ReactComponent as MainImage } from 'assets/img/main-image.svg'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos voce a encontar os melhores produtos disponiveis no
              mercado
            </p>
            <ButtonHome />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
