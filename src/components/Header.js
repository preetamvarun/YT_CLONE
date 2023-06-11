import ham from './Images/hamburgermenuicon.jpg';
import yt_logo from './Images/yt_1200.png';

const Header = () => {
  return (
    <div className='flex flex-1 items-center bg-red-800'>
      <div className='flex items-center'>
        <div className='mx-2'>
          <img src={ham} alt='hamburger-menu-icon' className='h-12 w-12' />
        </div>
        <div>
          <img src={yt_logo} alt='yt_logo' className='h-20 w-24' />
        </div>
      </div>
      <div>
        <input
          type='text'
          placeholder='search'
          className='py-2 px-4 rounded-l-3xl border border-solid border-black'
        />
      </div>
    </div>
  );
};

export default Header;
