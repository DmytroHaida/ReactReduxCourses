import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';
const Profile = (props) => {
    const {profile, isAuth, status, updateStatus} = props;
    return (
        
        <div className='content'>
            <ProfileInfo profile={profile} 
            isAuth={isAuth} 
            isOwner={props.isOwner} 
            savePhoto={props.savePhoto}
            saveProfileInfo={props.saveProfileInfo}/>
            <MyPostContainer status={status} updateStatus={updateStatus} />


        </div>
    );
}
export default Profile;