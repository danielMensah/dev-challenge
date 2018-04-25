import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './app.css';
import UsersComponent from '../../components/users-component';
import AlbumComponent from '../../components/album-component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getUsers, getAlbums, getPhotos } from '../../actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isUserClicked: false };
  }

  componentWillMount() {
    this.props.getUsers();
    this.props.getAlbums();
    this.props.getPhotos();
  }

  render() {
    const { users, userAlbum } = this.props;
    const { user, albums } = userAlbum;
    const { isUserClicked } = this.state;

    return (
      <MuiThemeProvider>
        <div id="app-container" className={styles.appContainer}>
          <UsersComponent showAlbums={this.showAlbums} users={users}/>
          {isUserClicked ? <AlbumComponent user={user} albums={albums}/> : null}
        </div>
      </MuiThemeProvider>
    )
  }

  showAlbums = () => this.setState({ isUserClicked: true });
}

const mapStateProps = ({ users, userAlbum }) => ({ users, userAlbum });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers, getAlbums, getPhotos }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(App);