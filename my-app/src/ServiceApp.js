import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Spinner from './components/Spinner';
import { logout } from './actions';

class ServiceApp extends React.Component {
    
    handleLogout = () => this.props.dispatch(logout())

    renderApplication = auth =>
            <React.Fragment>
                <Navbar loadFresh auth={auth} logout={this.handleLogout} id="navbar-main" />
                <Navbar auth={auth} logout={this.handleLogout} id="navbar-clone" />
                <Routes />
            </React.Fragment>
        


    render() {
        const { auth } = this.props
        return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />
    }
}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(ServiceApp)