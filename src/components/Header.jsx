import Logo from '../assets/Logo.png';

const Header = () => {
  return (
      <header>
        <nav className="w-full fixed z-[9999] top-0 bg-gray-200 flex justify-start py-4">
          <div className="container mx-auto">
            <img src={Logo} alt="Logo Image" />
          </div>
        </nav>
      </header>
  );
};

export default Header;