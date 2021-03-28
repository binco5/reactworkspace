import React from 'react';
import SearchBar from "./SearchBar";
import youTube from "../api/youTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSumbit('Döööööh');
    }

    onTermSumbit = async term => {
        const response = await youTube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideos: response.data.items[0]
        });
    };

    onVideoSelect = video =>{
        return(
            this.setState({selectedVideo: video})
        );
    }

    render(){
        return <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSumbit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail
                            video={this.state.selectedVideo}
                        />
                    </div>
                    <div className="fve wide column">
                        <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default App;