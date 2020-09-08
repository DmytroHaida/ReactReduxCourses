import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/header/headerContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Video from './components/Video/Video';
import LoginPage from './components/Login/login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
	componentDidMount() {

		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (

			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<Suspense fallback={<Preloader />}>
					<Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/Dialogs' render={() => <DialogsContainer />} />
					<Route path='/News' component={News} />
					<Route path='/Video' component={Video} />
					<Route path='/Users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <LoginPage />} />
				</Suspense>
			</div>

		)
	};
}
const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default connect(mapStateToProps, { initializeApp })(App);