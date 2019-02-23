import React from 'react';

function UserInfo(props){
    return (
        <div>
            <div>{props.user.name}</div>
            <div>{props.user.surrname}</div>
            <div>{props.user.phone}</div>
        </div>
    );
}

export default UserInfo;