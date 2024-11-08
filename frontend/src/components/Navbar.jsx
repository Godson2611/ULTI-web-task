import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                to='/question'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark fw-bold text-decoration-underline"
                    : "nav-link text-dark fw-bold"
                }
              >
                Question
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/section'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark fw-bold text-decoration-underline"
                    : "nav-link text-dark fw-bold"
                }
              >
                Section
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/preview'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark fw-bold text-decoration-underline"
                    : "nav-link text-dark fw-bold"
                }
              >
                Preview
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
