import { Link } from "react-router"

function NavBar(){
    return(
        <nav>
            <Link><button to='/'>Home</button></Link>
            <Link><button to='/shop'>Shop</button></Link>
            <Link><button to='/cart'>Cart</button></Link>
        </nav>
    )
}

export default NavBar