import { addDialogMesseges } from '../../Redux/dialogs-reducer ';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,

    }
}


export default compose(connect(mapStateToProps, { addDialogMesseges }),
    withAuthRedirect)
    (Dialogs);