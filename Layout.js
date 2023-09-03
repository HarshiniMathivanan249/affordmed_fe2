import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        
          <li>
            <Link to="/trainlist">TrainList</Link>
          </li>
          <li>
            <Link to="/details">TrainDetails</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;