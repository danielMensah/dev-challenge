import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import { setUserAlbum, reset } from '../actions/user-actions';

class User extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    showAlbums: PropTypes.func.isRequired
  };

  render() {

    return <RaisedButton
      label={this.props.name}
      primary={true}
      style={{margin: 5}}
      onClick={this.setAlbums} />
  }

  setAlbums = () => {
    const { id, albums, setUserAlbum, reset, name } = this.props;
    this.props.showAlbums();
    setUserAlbum(albums.filter(album => album.userId === id), name);
    reset();
  }
}

const mapStateProps = ({ albums }) => ({ albums });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setUserAlbum, reset }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(User);
