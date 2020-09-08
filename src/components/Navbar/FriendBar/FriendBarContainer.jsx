import { connect } from 'react-redux';
import React from 'react';
import FriendBar from './FriendBar';
import { compose } from 'redux';
import {getFriendList} from '../../../Redux/friendBar-reducer';



class FriendBarClassConteiner extends React.Component {
    componentDidMount() {
        this.props.getFriendList()
    }
    render(){
        return < FriendBar {...this.props} />
    }

}
const mapStateToProps = (state) => {
    return {
        
        state: state,
        followedUsers: state.FriendBarItem.followedUsers
    }
}

export default compose
(connect(mapStateToProps, { getFriendList })(FriendBarClassConteiner));