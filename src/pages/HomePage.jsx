import { Link } from "react-router"

function HomePage() {
  
  return (
    <>
        <h1>Welcome!</h1>
        <Link to='/shop'>
            <button>Enter</button>
        </Link>
    </>
  )
}

export default HomePage
