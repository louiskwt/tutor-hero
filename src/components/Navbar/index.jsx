import {Link} from "react-router-dom";
import {useAuth} from "../../hooks";

export const Navbar = () => {
  const {user} = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DSE Starchaser ⭐️</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <>
              {" "}
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                <i className="fa-solid fa-book fa-2x"></i>
              </label>
            </>
          ) : (
            <>
              <li className="text-xl btn btn-primary">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
