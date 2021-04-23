import React from 'react';
import './data.css';
import Server from './services/mainserver';
const url = `photos`;
class Photos extends React.Component {
    constructor(){
        super();
        this.state={
            data:[],
        }
    }
   componentDidMount(){
        Server.get(url)
        .then(res => {
            this.setState({data:res.data});
        })
    }
    render() {
        const data = this.state.data;
        if(data) {
            console.log(data)
            var userdata = data.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.albumId}>
                        <span id='spancomponent'> Id : {e.id}</span><br></br>
                        <span>Title : {e.title}</span><br></br>
                        <img src={e.thumbnailUrl}></img>
                    </div>
                )
                })
        }
        return(
            <div id='container'>
                {userdata}
            </div>
        )
    }
}
export default Photos;