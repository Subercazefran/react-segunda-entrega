import { Link } from "react-router-dom";
import './Home.css';


function Home() {
    return (
        <div className="home">
            <div className="home__content">
                <h1>¡Cuanto mas vas a esperar para aprender!</h1>
                <h2>Aqui se aprende haciendo</h2>
                <Link to = {"/cursos"}>Ver todos los cursos</Link>
            </div>
            <img src={process.env.PUBLIC_URL + "/img/aprendisaje.jpg"} alt="Pchome" className="home__images"/>   
        </div>
    )
}

export default Home;