import React from 'react';

const Post = (props) => {
    const {Messeges, likeCount} = props;
    return (
        <div className="postItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU" alt=""/>
                <div>
                    
                    <span>  {Messeges}</span>
                    <div><span className="like">like  {likeCount}</span>
                    <span className="submit">  Submit</span>
                    </div>
                </div>
        </div>
    );
}
export default Post;