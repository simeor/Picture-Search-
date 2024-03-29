import React from 'react';


class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }


  render(){
    const {description, urls} = this.props.image;
    return(
      <div style={{margin:'auto'}}><img ref={this.imageRef} src={urls.regular}
        alt={description}/></div>
   );
  }
}

export default ImageCard;
