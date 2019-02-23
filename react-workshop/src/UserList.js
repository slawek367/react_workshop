import React from 'react';
import UserInfo from './UserInfo'

function UserList(props){

    return (
        <table className="table col-sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surrname</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            { props.users.map( user => <UserInfo key={ user.id } user={user}/>) }
            </tbody>
        </table>
    )
}

export default UserList;