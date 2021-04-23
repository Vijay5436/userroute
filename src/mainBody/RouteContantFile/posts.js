import React from 'react';
import ServerData from '../server';
//import Server from './serverItems/services/mainserver'
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:`posts`,
        }
    }
    // datas =()=> {Server.get('/photos')
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // }
    render() {
        const {url} =this.state;
        return(
            <div>
                
                <ServerData url={url} />
            </div>
        )
    }

}
export default Posts;