import { useSelector } from 'react-redux';

const SideBar = () => {

  /* subscribe to specific part of a store. Don't subscribe to the entire store which is not optimal */
  const isSideBarOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern. 
  if (!isSideBarOpen) return null;

  return (
    <div className='shadow-lg  m-2 pl-2 pt-2 pb-2' style={{ flex: 1 }}>
      <div className='hover:cursor-pointer'>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
      </div>
      <div className='py-2'>
        <ul>
          <li className='font-bold'>Subscriptions</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='font-bold'>Watch Later</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
