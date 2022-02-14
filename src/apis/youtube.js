import axios from 'axios';;

const KEY = 'AIzaSyDh2ENvIhTywUFZYxjhalfAu_WBtZDVtjY';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 5,
  }
})