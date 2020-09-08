import React from 'react';
const FriendsItem = (props) => {
    const { photos, name} = props;
    return (
        <div  className="FriendBarItems" >
            <img src={photos} width="100%" alt="" />
            <div>
                <h3>{name}</h3>
            </div>
        </div>

    );
}


export default FriendsItem;