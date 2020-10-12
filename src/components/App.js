import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{

  state = {
    images: []
  }

  onSerachSubmit = async (term) => {
    const res = await unsplash.get(`/search/photos`, {
      params: { query: term},
    });

    this.setState({images: res.data.results});
  };

  render(){
    return(
      <div className="ui container" style={{marginTop:'15px'}}>
        <SearchBar onSubmit={this.onSerachSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    )
  }
};

export default App
