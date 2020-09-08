import React from 'react';
import usersPhoto from '../../assets/img/userAvatar.png'
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }
    let handlePageClick = data => {
        let selected = data.selected + 1;
        props.onPageChanged(selected)
      };

      
    return (
        <div className="usersPage">

            <div>
                <div className="commentBox">
                    <ReactPaginate
                        previousLabel={'< previous'}
                        nextLabel={'next >'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pagesCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={7}
                        initialPage={0}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'selectedPage'}
                        pageLinkClassName={'unSelectedPage'}

                    />


                </div>
                {
                    props.users.map(u => <div className='ddddd' key={u.id}>
                        <span  >
                            <div>
                                <NavLink to={"/Profile/" + u.id}>
                                    <img className="usersPhoto" src={u.photos.small != null ? u.photos.small : usersPhoto} alt="UserPhoto" title={u.name} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.unFollow(u.id) }
                                        }>UnFollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.follow(u.id) }
                                        }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>Name: {u.name}</div>
                                <div>Status: {!u.status ? "-----" : u.status}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Users;