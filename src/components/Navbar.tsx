
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-construction-blue">BuildForge<span className="text-construction-yellow">.</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            
            {/* About Us Dropdown - Desktop */}
            <div className="relative group">
              <button className="flex items-center text-construction-gray font-semibold hover:text-construction-blue transition-colors duration-300">
                About Us <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/about" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Company Overview</Link>
                  <Link to="/about#vision-mission" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Vision & Mission</Link>
                  <Link to="/about#approach" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Our Approach</Link>
                  <Link to="/about#values" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Core Values</Link>
                  <Link to="/about#management" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Management</Link>
                </div>
              </div>
            </div>

            <NavLink to="/services">Services</NavLink>
            
            {/* Projects Dropdown - Desktop */}
            <div className="relative group">
              <button className="flex items-center text-construction-gray font-semibold hover:text-construction-blue transition-colors duration-300">
                Projects <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/projects" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">All Projects</Link>
                  <Link to="/projects#commercial" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Commercial</Link>
                  <Link to="/projects#infrastructure" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Infrastructure</Link>
                  <Link to="/projects#industrial" className="block px-4 py-2 text-construction-gray hover:bg-gray-100 hover:text-construction-blue">Industrial</Link>
                </div>
              </div>
            </div>

            <NavLink to="/equipment">Equipment</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-accent">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-construction-blue"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            
            {/* About Us Dropdown - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-construction-gray font-semibold hover:text-construction-blue">
                About Us <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem asChild>
                  <Link to="/about" onClick={toggleMenu}>Company Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#vision-mission" onClick={toggleMenu}>Vision & Mission</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#approach" onClick={toggleMenu}>Our Approach</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#values" onClick={toggleMenu}>Core Values</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#management" onClick={toggleMenu}>Management</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
            
            {/* Projects Dropdown - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-construction-gray font-semibold hover:text-construction-blue">
                Projects <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem asChild>
                  <Link to="/projects" onClick={toggleMenu}>All Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projects#commercial" onClick={toggleMenu}>Commercial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projects#infrastructure" onClick={toggleMenu}>Infrastructure</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projects#industrial" onClick={toggleMenu}>Industrial</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <MobileNavLink to="/equipment" onClick={toggleMenu}>Equipment</MobileNavLink>
            <MobileNavLink to="/clients" onClick={toggleMenu}>Clients</MobileNavLink>
            <MobileNavLink to="/careers" onClick={toggleMenu}>Careers</MobileNavLink>
            <MobileNavLink to="/testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="btn-accent w-full text-center"
                onClick={toggleMenu}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-construction-gray font-semibold hover:text-construction-blue transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="block py-2 text-construction-gray font-semibold hover:text-construction-blue transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
