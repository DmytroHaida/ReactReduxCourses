import { addPosts } from '../../../Redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateStatus } from '../../../Redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.PostsData,
        NewPostText: state.ProfilePage.NewPostText,
        status: state.ProfilePage.status
        
    }
}

export default compose(connect(mapStateToProps, { addPosts, updateStatus  }))(MyPost);