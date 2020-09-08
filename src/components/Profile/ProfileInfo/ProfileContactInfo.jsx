import React from 'react';
import { FormField, Input, TextArea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

export const ProfileContactInfo = (props) => {

    let { contacts, lookingForAJobDescription, userId, lookingForAJob, fullName, aboutMe } = props.props.profile;
    let { isOwner, goToEditMode } = props;




    return (
        <div className="avatarInfo">
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <h3>
                {fullName} id:{userId}
            </h3>
            <div>{aboutMe}</div>
            <div>
                <h4>MyContacts</h4>
                <div>Looking for a job: {lookingForAJob ? 'Yes' : 'no'}</div>
                {lookingForAJob && <p>My Proff Skills: {lookingForAJobDescription}</p>}
                <div>
                    <b>Contacts</b>:  {Object.keys(contacts).map(key => {
                        return <Contacts key={key} contactTitle={key} contactValue={contacts[key]} />
                    })}
                </div>
            </div>
        </div>
    )
}

export const ProfileContactInfoForm = (props) => {
    let { contacts, lookingForAJobDescription, fullName, aboutMe } = props.props.profile;
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="avatarInfo">
                <h3>
                    {fullName} {FormField(Input, null, 'Enter Full Name', 'fullName')}
                </h3>
                <div>
                    <h4>MyContacts</h4>
                    <div>About me: {aboutMe}</div>
                    {FormField(TextArea, null, 'About me', 'aboutMe')}
                    <div>Looking for a job</div>
                    {FormField(Input, 'checkbox', null, 'lookingForAJob')}

                    <p>My Proff Skills: {lookingForAJobDescription}</p>
                    {FormField(TextArea, null, 'My Proff Skills', 'lookingForAJobDescription')}
                    <div>
                        <b>Contacts</b>:  {Object.keys(contacts).map(key => {
                            return <div key={key}>{key}: {FormField(Input, null, key, 'contacts.' + key)}</div>
                        })}
                    </div>
                    {props.error && <div className={"FormControl error"}>{props.error}</div>}
                    <div><button>Save</button></div>
                </div>
            </div>
        </form>
    )
}

const ProfileContactInfoFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileContactInfoForm)

const Contacts = ({ contactTitle, contactValue }) => {
    return <div className='profileContacts'><p>{contactTitle}:</p> {contactValue} </div>
}
export default ProfileContactInfoFormReduxForm


