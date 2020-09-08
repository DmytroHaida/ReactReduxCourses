import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, getUsers } from '../../Redux/users-reducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { toggleFolowingProgress } from '../../Redux/users-reducer';
import { compose } from 'redux';
import { getPageSize, getUsersSelector, totalUsersCount, currentPage, followingInProgress } from '../../Redux/selectors/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
    let {currentPage, pageSize} = this.props;

        this.props.getUsers(currentPage, pageSize);

    }
    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber);
    }
    render() {

        const {totalUsersCount, pageSize, currentPage, users, unFollow, follow,
            toggleFolowingProgress, followingInProgress} = this.props;

        return <>
            <div className="userWallpaper">
                {this.props.isFetching ? <Preloader /> : null}


                <Users totalUsersCount={totalUsersCount}
                    pageSize={pageSize}  currentPage={currentPage} onPageChanged={this.onPageChanged}
                    users={users} unFollow={unFollow} follow={follow}
                    toggleFolowingProgress={toggleFolowingProgress}
                    followingInProgress={followingInProgress}
                />
            </div>
        </>

    }




}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        followingInProgress: followingInProgress(state)
    }
}

export default compose
(connect(mapStateToProps, { follow, unFollow, setCurrentPage, toggleFolowingProgress, getUsers }))
(UsersContainer)