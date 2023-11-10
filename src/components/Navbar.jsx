import { Link } from "react-router-dom"


function Navbar() {
  return (
    <header className='cite-container navbar bg-base-100'>
      <div className="cite-container flex justify-between items-center w-full">
        <Link to="/" className="btn btn-success normal-case text-xl">
          Where in the
        </Link>
      </div>
      <button>Click</button>
    </header>
  )
}

export default Navbar