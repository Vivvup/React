import { Link } from 'react-router-dom';

function Menyy () {
    return(
        <div>
            <Link to="/tegelased">
                <button className= "menyy-nupp">TEGELASED</button>
            </Link>
            <Link to="/autod">
                <button className= "menyy-nupp">AUTOD</button>
            </Link>
            <Link to="/keel">
                <button className= "menyy-nupp">MUUDA KEEL</button>
            </Link>
            <Link to="/andmebaas">
                <button className= "menyy-nupp">ANDMEBAAS</button>
            </Link>
        </div>
    );
}
export default Menyy;