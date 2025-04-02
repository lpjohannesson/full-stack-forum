import { Link } from "react-router";

function Header() {
    return (
      <header className="flex justify-between items-center px-4 h-[75px] shadow">
        <Link to="/">FullStackForum</Link>
        <div className="flex items-center gap-2">
            <Link to="/login" className="bg-black text-white rounded-full font-bold px-4 py-2">Log in</Link>
            <Link to="/register" className="outline rounded-full font-bold px-4 py-2">Register</Link>
        </div>
      </header>
    )
  }
  
  export default Header;
  