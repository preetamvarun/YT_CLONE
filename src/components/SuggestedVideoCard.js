import { Link } from 'react-router-dom';

export const SuggestedVideoCard = ({ eachResult }) => {
  return (
    <Link to={'/watch?v=' + eachResult.id.videoId} key={eachResult.id.videoId}>
      <div className='m-1 flex justify-start items-start'>
        <div className='mx-2 mb-2 hover:cursor-pointer'>
          <img
            src={eachResult.snippet.thumbnails.medium.url}
            alt='thumbnail'
            className='rounded-xl'
          />
        </div>
        <div className='ml-4'>
          <p className='mb-1'>{eachResult.snippet.title}</p>
          <div className='my-2'>
            <i className='fa-solid fa-user mr-2'></i>
            <p className='inline-block text-sm text-[#848181]'>
              {eachResult.snippet.channelTitle}
            </p>
          </div>
          <p className='text-sm text-[#535050]'>
            {eachResult.snippet.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
