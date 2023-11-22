import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
      <header>
        <nav className="w-full fixed z-[9999] top-0 left-0 bg-gray-200 flex justify-start py-4">
          <div className="container mx-auto ml-auto flex items-center">
            <img src={Logo} alt="Logo Image" className='cursor-pointer' onClick={() => navigate('/')}/>
          </div>
        </nav>
      </header>
  );
};

export default Header;