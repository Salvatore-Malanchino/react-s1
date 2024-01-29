import { Component } from 'react';
class ImageComponent extends Component {
  render() {
    return <img src={this.props.changeImg} alt="img" className="changeImg" />;
  }
}
export default ImageComponent;
