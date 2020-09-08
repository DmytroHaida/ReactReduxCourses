import React from 'react';
import FriendsItem from './FriendBarComponents/FriendsItem';
const FriendBar = (props) => {



    let FriendListCreator = props.followedUsers.map(f => < FriendsItem key={f.id} photos={f.photos.small}
         name={f.name} />)

    return (
        <div className="FriendBarWrapper">
            <h2>Friends</h2>
            <div className="FriendBar">{FriendListCreator}</div>
        </div>
    );
}


export default FriendBar;