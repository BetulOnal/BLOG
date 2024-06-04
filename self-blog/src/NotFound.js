import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <h1>Sorry</h1>
            <p>That page cannot  be found</p>
            <Link to="/"> Home Page </Link>
        </div>
     );
}
 
export default NotFound;