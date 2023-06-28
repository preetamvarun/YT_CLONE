const API_KEY = 'AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI';

export const ytAPI =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  API_KEY;

export const ytSearchAPI =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
