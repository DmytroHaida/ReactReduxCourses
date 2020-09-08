import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, savePhoto, getStatus, saveProfileInfo } from '../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    RefreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.RefreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.RefreshProfile();

        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                savePhoto={this.props.savePhoto}
            />
        );

    }
}


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, savePhoto, saveProfileInfo }),
    withAuthRedirect, withRouter,
)
    (ProfileContainer);