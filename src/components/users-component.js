import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './users-component.css';
import User from './user-component';

class UsersComponent extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired,
    showAlbums: PropTypes.func.isRequired
  };

  render() {
    const { users } = this.props;

    return (
      <div className={styles.container}>
        <label className={styles.label}>Users</label>
        {users.map((user) => <User showAlbums={this.props.showAlbums} key={user.id} id={+user.id} name={user.name} />)}
      </div>
    )
  }
}

export default connect()(UsersComponent);
