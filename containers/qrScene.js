import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import QrScene from '../scenes/qrScene';
import {setCameraReady} from '../actions';
import {HEADER_STYLE} from '../styles/styles';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCameraReady,
  }, dispatch);
}

class QRContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
      return ({
        title: `Načíst QR kód`,
        ...HEADER_STYLE,
      });
  };

  render() {
    return (
        <QrScene
          cameraReady={this.props.configuration.cameraReady}
          setCameraReady={this.props.setCameraReady}
          navigation={this.props.navigation}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QRContainer)
