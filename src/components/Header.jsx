import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
      <header className='bg-gray-200 sticky top-0 z-[9999]'>
        <nav className="max-w-[1440px] flex justify-start py-4">
          <div className="container mx-auto ml-auto flex items-center">
            <img src={Logo} alt="Logo Image" className='cursor-pointer' onClick={() => navigate('/')}/>
          </div>
        </nav>
      </header>
  );
};

export default Header;
