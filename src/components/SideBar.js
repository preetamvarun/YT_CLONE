const SideBar = () => {
  return (
    <div className='shadow-lg  m-2' style={{ flex: 1 }}>
      <div>
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
