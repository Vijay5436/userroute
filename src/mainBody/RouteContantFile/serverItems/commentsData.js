import React from 'react';
import './data.css';

class CommentsData extends React.Component {
    render() {
        const data = this.props.data;
        if(data) {
            var commentsdata = data.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.id}>
                        <span id='spancomponent'>PostId : {e.postId}</span><br></br>
                        <span>Id : {e.id}</span><br></br>
                        <span>Name : {e.name}</span><br></br>
                        <span>Email : {e.email}</span><br></br>
                        <span>Body : {e.body}</span><br></br>
                    </div>
                )
                })
        }
        return(
            <div id='container'>
                {commentsdata}
            </div>
        )
    }
}
export default CommentsData;