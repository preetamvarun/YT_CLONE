import { Link } from 'react-router-dom';

export const SuggestedVideoCard = ({ eachResult, showDescription }) => {
  return (
    <Link to={'/watch?v=' + eachResult.id.videoId} key={eachResult.id.videoId}>
      <div className='m-1 flex justify-start items-start'>
        <div className=' mb-2 hover:cursor-pointer'>
          <img
            src={eachResult.snippet.thumbnails.medium.url}
            alt='thumbnail'
            className='rounded-xl'
          />
        </div>
        <div className='ml-4'>
          <p className='mb-1'>{eachResult.snippet.title}</p>
          <p className='inline-block text-sm text-[#848181] mb-2'>
            {eachResult.snippet.channelTitle + ' ☑️'}
          </p>
          {showDescription && (
            <p className='text-sm text-[#535050]'>
              {eachResult.snippet.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
