import { Link } from 'react-router-dom';

function Menyy () {
    return(
        <div>
            <Link to="/Tegelased">
                <button className= "menyy-nupp">TEGELASED</button>
            </Link>
            <Link to="/Autod">
                <button className= "menyy-nupp">AUTOD</button>
            </Link>
        </div>
    );
}
export default Menyy;