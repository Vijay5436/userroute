import React from 'react';
import ServerData from '../server';
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:`comments`,
        }
    }
    render() {
        const {url} =this.state;
        return(
            <div>
                <h1>Comments</h1>
                <ServerData url={url} />
            </div>
        )
    }

}
export default Comments;