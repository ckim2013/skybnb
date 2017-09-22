import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

class LodgingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    console.log("constructor");
  }

  componentWillMount() {
    this.props.fetchLodging(this.props.match.params.lodgingId)
    .then(() => this.setState({ loading: false }));
  }

  render() {
    console.log("render");
    if (this.state.loading === true) {
      return (
        <h2>LOADING</h2>
      );
    }

    return (
      <div className="lodging-show-container">
        <h1>{this.props.lodging.title}</h1>
        <Image publicId={this.props.lodging.image_url} cloudName="skybnb" >
          <Transformation width="1680" crop="scale" />
        </Image>
      </div>
    );
  }
}


export default LodgingShow;
