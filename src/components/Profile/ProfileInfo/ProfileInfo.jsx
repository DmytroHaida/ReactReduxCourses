import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userAvatar from '../../../assets/img/userAvatar.png'
import ProfileContactInfoFormReduxForm, { ProfileContactInfo } from './ProfileContactInfo';
const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    let onProfilePhotoSelect = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfileInfo(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    let { photos } = props.profile;


    return (

        <div>
            <div className='ProfileContent'>
                <div>
                    <img width="300px" src={photos.large ? photos.large : photos.small || userAvatar} alt="" title={props.profile.fullName} />
                </div>
                {props.isOwner && <input type="file" onChange={onProfilePhotoSelect} />}
                {editMode
                    ? <ProfileContactInfoFormReduxForm props={props}
                        onSubmit={onSubmit}
                        initialValues={props.profile}
                        isError={props.error} />
                    : <ProfileContactInfo props={props} isOwner={props.isOwner}
                        goToEditMode={() => setEditMode(true)} />}
            </div>
        </div>
    );
}
export default ProfileInfo;

