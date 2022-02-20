import { Link } from "react-router-dom";

function Navbar () {
    return (
    <div>
        <Link to= '/'>
            <button>ÜLEVAADE</button>
        </Link>
        <Link to= '/lisa_kulutus'>
             <button>LISA KULUTUSED</button>
        </Link>
        <Link to= '/ajalugu'>
            <button>AJALUGU</button>
        </Link>
    </div>);
}
export default Navbar;