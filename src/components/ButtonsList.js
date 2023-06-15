import ButtonComponent from './ButtonComponent';

const ButtonsList = () => {
  const btns = [
    'All',
    'Live',
    'Soccer',
    'Gaming',
    'Comedy',
    'Cricket',
    'PS5',
    'Hockey',
  ];
  return (
    <div>
      {btns.map((btnName) => (
        <ButtonComponent name={btnName} key={btnName} />
      ))}
    </div>
  );
};

export default ButtonsList;
