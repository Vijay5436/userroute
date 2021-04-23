import React from 'react';
import './data.css';

class Userdata extends React.Component {
    render() {
        const data = this.props.data;
        if(data) {
            var userdata = data.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.id}>
                        <span id='spancomponent'> Id : {e.id}</span><br></br>
                        <span>Name : {e.name}</span><br></br>
                        <span>Email : {e.email}</span><br></br>
                        <span>Address :<br></br> street : {e.address.street  } ,
                        suite : {e.address.suite} ,<br></br> city : {e.address.city} ,
                        zipcode :{e.address.zipcode}
                        </span><br></br>
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
export default Userdata;