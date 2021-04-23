import React from 'react';
import './data.css';


class Postdata extends React.Component {

    render() {
        const data = this.props.data;
        //this.setState({spinner:true});
        if(data) {
            //this.setState({spinner:false})
            var postdatas = data.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.id}>
                        <span id='spancomponent'>User Id : {e.userId}</span><br></br>
                        <span>Id : {e.id}</span><br></br>
                        <span>Title : {e.title}</span><br></br>
                        <span>Body :{e.body} </span><br></br>
                    </div>
                )
                })
                // this.setState({postdatavalue:postdatas})
        }
        return(
            <div id='container'>
                {postdatas}
            </div>
        )
    }
}
export default Postdata;