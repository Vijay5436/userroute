import React from 'react';
import './data.css';
import Server from './services/mainserver';
const url = `albums`;
class Album extends React.Component {
    constructor(){
        super();
        this.state={
            data:[],
        }
    }
   componentDidMount(){
        Server.get(url)
        .then(res => {
            this.setState({data:res.data})
        })
    }
    render() {
        const data = this.state.data;
        if(data) {
            console.log(data)
            var albumdata = data.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.userId}>
                        <span id='spancomponent'> Id : {e.id}</span><br></br>
                        <span>Title : {e.title}</span><br></br>
                    </div>
                )
                })
        }
        return(
            <div id='container'>
                {albumdata}
            </div>
        )
    }
}
export default Album;