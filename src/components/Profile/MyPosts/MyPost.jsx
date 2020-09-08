import React from 'react';
import Post from './Post/post';
import ProfileStatusWithHooks from '../ProfileInfo/ProfileStatusWithHooks';
import { reduxForm, Field } from 'redux-form';
import { requiredFild, maxLengthCreator } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';

const maxLengthCreator10 = maxLengthCreator(10);

const MyPost =  props => {
    let PostCreator = props.posts.map(posts => <Post key={posts.id} Messeges={posts.name} />);
    let onAddPost = values => {
        props.addPosts(values.NewPostText);
    };

    return <div className="post">
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <h3>My Posts</h3>
        <AddPostsFormRedux onSubmit={onAddPost} />

        {PostCreator}
    </div>;
};
let addPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='postInput'>
                <Field component={TextArea} placeholder='Leave your post' name='NewPostText' validate={[requiredFild, maxLengthCreator10]} />
            </div>
            <div>

                <button className='buttonAccept'>add posts</button>
            </div>
        </form>
    );

}
let AddPostsFormRedux = reduxForm({ form: "ProfileaddPostsForm" })(addPostsForm)

export default MyPost;