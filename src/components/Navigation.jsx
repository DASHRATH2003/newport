import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-primary"
        >
          Portfolio
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition`
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-6 flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition py-2`
              }
              onClick={() => setMobileMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition py-2`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition py-2`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition py-2`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? 'text-primary' : 'text-dark'} hover:text-primary transition py-2`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
