import React from 'react';
import { Route } from 'react-router-dom';


const MessegesItem = (props) => {
    return (
        <div className="messeges__items">
        <Route path={'/Dialogs/' + props.id}><div className="messegge__item">{props.Messege}</div></Route>
        </div>
    );
}

export default MessegesItem;