import React from 'react';

function UserInfo(props){
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.surrname}</td>
            <td>{props.user.phone}</td>
        </tr>
    );
}

export default UserInfo;