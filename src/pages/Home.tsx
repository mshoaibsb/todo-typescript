import { Link } from "react-router-dom";


const Home: React.FC = (): JSX.Element => {
    return(
        <>
        <Link to = 'register' >Register</Link><br/>
        <Link to = 'login'>Login</Link>
        </>
    )
}

export default Home;