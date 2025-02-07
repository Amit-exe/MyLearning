// component/NavBar.js

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row m-8 justify-between">
      <p className="text-2xl ">Brand💯</p>
      <nav>
        <ul className="flex flex-row gap-5 justify-end text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/joke"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Joke
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
