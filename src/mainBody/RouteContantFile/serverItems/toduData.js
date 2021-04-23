import React from 'react';
import {Spinner } from 'react-bootstrap';
import './data.css';
const spinnercomponent = [];
class Todudata extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            spinner: false,
        }
    }
    render() {
        const data = this.props.data;
        if(this.state.spinner === true) {
            spinnercomponent.push(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }
        if(data) {
            // this.setState({spinner:true})
            var postdatas = data.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.id}>
                        <span id='spancomponent'>User Id : {e.userId}</span><br></br>
                        <span>Id : {e.id}</span><br></br>
                        <span>Title : {e.title}</span><br></br>
                    </div>
                )
                })
        }
        return(
            <div id='container'>
                {spinnercomponent}
                {postdatas}
            </div>
        )
    }
}
export default Todudata;