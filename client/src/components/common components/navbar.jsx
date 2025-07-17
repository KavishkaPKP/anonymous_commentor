import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          මංගැ​න කමෙන්ට්​ස්
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;