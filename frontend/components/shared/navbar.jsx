import React from 'react';
import { hashHistory, Link } from 'react-router';
import { logOut } from '../../reducers/session_redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user))

  }
};

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: this.props.currentUser}

  }

  // componentWillReceiveProps(newProps) {
  //   if (!newProps.currentUser)
  // }

  render() {
    // debugger
    return (
      <div className="nav-container">
        <div className="nav-inside">

          <li className="titlelogo" onClick={() => hashHistory.push('/home')}>
            <i className="fa fa-beer" aria-hidden="true"></i> ONTAP
          </li>
          <li onClick={() => hashHistory.push('/beers')}>
            Top beers
          </li>
          <li onClick={() => hashHistory.push('/breweries')}>
            Breweries
          </li>
          <li className="account-button">
            {this.state.user.username}
            <div className="dropdown">
              <div>
                <Link to={`/users/${this.state.user.id}`}>My profile</Link>
              </div>
              <div>
                Add Picture
              </div>
              <div>
                Edit Profile
              </div>
              <div>
                Wish list
              </div>
              <div onClick={() => this.props.logOut(this.props.currentUser).then(() => hashHistory.push('/'))}>
                Log out
              </div>
            </div>
          </li>
          <li onClick={() => this.props.logOut(this.props.currentUser).then(() => hashHistory.push('/'))}>
            Log Out
          </li>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
