import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
            <NavLink className="Dialog" to={'/Dialogs/' + props.id}>{props.name}</NavLink>
    );
}

export default DialogItem;