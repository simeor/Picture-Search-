import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{

  onSerachSubmit(term){
    axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term} ,
      headers:{
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
      }
    });
  }

  render(){
    return(
      <div className="ui container" style={{marginTop:'15px'}}>
        <SearchBar onSubmit={this.onSerachSubmit} />
      </div>
    )
  }
};

export default App
