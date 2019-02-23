import React, { useState } from 'react';
import UserInfo from './UserInfo'

function UserList(props) {

    const [users, setUsers] = useState(props.users)
    const [sortAsc, setSortAsc] = useState(false)
    const [value, setValue] = useState("")

    const filterInputUsers = (event) => {
        let inputName = event.target.value.toLowerCase()
        if (inputName) {
            setUsers(props.users.filter(user => {
                let isOk = false
                Object.values(user).forEach(val => {
                    if (val.toString().includes(inputName)) {
                        isOk = true
                    }
                })
                return isOk
            }
            ))
        } else {
            setUsers(props.users)
        }
        //sortUsers()
    }

    const sortUsers = () => {
        let arrCopy = [...users]
        setUsers(arrCopy.sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
    }

    const toggleSort = () => {
        setSortAsc(!sortAsc)
        sortUsers()
    }

    return (
        <div>
            <div className="row">
                <input className="form-control col-sm" onChange={filterInputUsers} placeholder="Search user"></input>
            </div>
            <button onClick={toggleSort}>sort</button>
            <table className="table col-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surrname</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <UserInfo key={user.id} user={user} />)}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;