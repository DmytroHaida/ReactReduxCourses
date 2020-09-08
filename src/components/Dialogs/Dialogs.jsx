import React from 'react';
import DialogItem from './DialogsItems/DialogItem';
import MessegesItem from './DialogsItems/MessegesItem';
import { Field, reduxForm } from 'redux-form';
import {TextArea} from '../common/FormsControls/FormsControls';
import { requiredFild, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {
    let DialogsItemCreator = props.DialogPage.DialogData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let MessegeItemCreator = props.DialogPage.MessegeData.map(m => <MessegesItem key={m.id} Messege={m.name} id={m.id} />);

    let addNewMessege = (values) => {
        props.addDialogMesseges(values.NewDialogMessege)
    }

    return (
        <div className="Dialogs">
            <div className="Dialogs-items">
                {DialogsItemCreator}
            </div>
            <div className="messeges">
                {MessegeItemCreator}
            </div>
            <AddMessegeFormRedux onSubmit={addNewMessege} />
        </div>
    );
}
const maxLengthCreator50 = maxLengthCreator(50);
const AddMessegeForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className="DialogForm">
            <div>
                <Field component={TextArea} name='NewDialogMessege'
                 placeholder="Введіть повідомлення"
                 validate={[requiredFild, maxLengthCreator50]}/>
            </div>
               <div> <button className="buttonAccept" >Send</button></div>
        </form>
);
}

const AddMessegeFormRedux = reduxForm({form:"dialogAddMessegeForm"}) (AddMessegeForm)

export default Dialogs;
