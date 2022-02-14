import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

import VideoList from "./VideoList"
import VideoDetails from "./VideoDetails"
import useVideos from '../hooks/useVideos';
const App = () => {
  const [selectedVideo, SetSelectedVideo] = useState(null)
  const [videos, search] = useVideos('Quran Karim')
  useEffect(() => {
    SetSelectedVideo(videos[0])
  }, [videos])
  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetails video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onSelectVideo={SetSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// class App extends Component {
//   state = {
//     videos: [],
//     selectedVideo: null
//   }
//   componentDidMount() {
//     this.onTermSubmit("quran Kareem")
//   }
//   onTermSubmit = async (term) => {
//     const Response = await youtube.get('/search', {
//       params: {
//         q: term
//       }
//     });
//     this.setState({
//       videos: Response.data.items,
//       selectedVideo: Response.data.items[0]
//     })
//   }
//   onSelectVideo = (video) => {
//     this.setState({ selectedVideo: video })
//   }

//   render() {
//     return (
//       <div className='ui container'>
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className='ui grid'>
//           <div className='ui row'>
//             <div className='eleven wide column'>
//               <VideoDetails video={this.state.selectedVideo} />
//             </div>
//             <div className='five wide column'>
//               <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
//             </div>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;