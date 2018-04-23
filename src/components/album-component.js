import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './album-component.css';
import { DropdownButton, MenuItem, Image } from 'react-bootstrap';
import { setAlbumPhotos } from '../actions/user-actions';
import { bindActionCreators } from 'redux';

class AlbumComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { albumTitle: "" };
  }

  static propTypes = {
    albums: PropTypes.array.isRequired,
    user: PropTypes.string.isRequired
  };

  render() {
    const { albums, albumPhotos, user } = this.props;
    const title = albumPhotos.length ? this.state.albumTitle : 'Albums';

    return (
      <div className={styles.container}>
        <label>{user}</label>
        <DropdownButton id="Dropdown" title={title} onSelect={this.handleChange}>
          {albums.map((album) => <MenuItem key={album.id} eventKey={album.id}>{this.capitalize(album.title)}</MenuItem>)}
        </DropdownButton>
        <div className={styles.photos}>
          { albumPhotos.map((photo) => {
            return <div key={photo.id} className={styles.singlePhoto}>
              <Image src={photo.thumbnailUrl}/>
              <span className={styles.title}>{photo.title}</span>
            </div>
          })}
        </div>
      </div>
    )
  }

  capitalize = (string) => string.replace(/\b\w/g, l => l.toUpperCase());

  handleChange = (eventKey, event) => {
    const albumTitle = event.target.text.toLowerCase();
    const selectedAlbum = this.props.albums.filter(album => album.title === albumTitle)[0];
    const albumPhotos = this.props.photos.filter((photo) => photo.albumId === selectedAlbum.id);

    this.setState({ albumTitle }, () => this.props.setAlbumPhotos(albumPhotos))
  };


}

const mapStateProps = ({ photos, albumPhotos }) => ({ photos, albumPhotos });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setAlbumPhotos }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(AlbumComponent);
