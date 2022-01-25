import {Link} from 'react-router-dom';

function Menyy () {
    return (
    <div className="main-link-list">
        <Link to="/Work">
            <button className= "main-link"><img src="work.jpeg"  alt="" /> </button>
        </Link>
        <Link to="/Hobbies">
            <button className= "main-link"><img src="hobbies.jpeg"  alt="" /></button>
        </Link>
        <Link to="/Courses">
            <button className= "main-link"><img src="courses.jpeg"  alt="" /> </button>
        </Link>

  </div> );
}

export default Menyy;