import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">M Sell</a>
        </div>
        <div className="flex-none gap-2">
          <Link to="/dashboard">Dashboard</Link>
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
        </div>
      </div>
    );
};

export default Navbar;