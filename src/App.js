import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import file from './apis/youtube';

class App extends React.Component{
  state={
    list_of_videos:[]
  }
  render(){
    const grab_data = async (user_term) => {
      const response = await file.get('/search',{
        params:{
          q:user_term
        }
      })
      this.setState({list_of_videos:response.data.items})
    }

    return (
      <div className="App">
        <SearchBar grab_data={grab_data} />
        <VideoList list_of_videos={this.state.list_of_videos} />
      </div>
    );
  }
}

export default App;