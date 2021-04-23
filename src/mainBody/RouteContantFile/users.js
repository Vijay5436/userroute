import React from 'react';
import ServerData from '../server';
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:`users`,
        }
    }
    render() {
        const {url} =this.state;
        return(
            <div>
                <h1>Users</h1>
                <ServerData url={url} />
            </div>
        )
    }

}
export default Users;