import MainBodyContainer from './MainBodyContainer';
import SideBar from './SideBar';

const Body = () => {
  return (
    <div className='flex'>
      <SideBar />
      <MainBodyContainer />
    </div>
  );
};

export default Body;
