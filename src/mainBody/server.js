import React from 'react';
import axios from 'axios'; 
import Postdata from './RouteContantFile/serverItems/postData';
import Todudata from './RouteContantFile/serverItems/toduData';
import CommentsData from './RouteContantFile/serverItems/commentsData';
import Userdata from './RouteContantFile/serverItems/userData';
import {Spinner } from 'react-bootstrap';
import Server from './RouteContantFile/serverItems/services/mainserver'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  const spinnercomponent=[];
class   ServerData extends React.Component {
 constructor(props) {
     super(props);
     this.state ={
        url:this.props.url,
        value:'',
        spinner:false,
     }
 }
 componentDidMount(){
     
        Server.get(`${this.props.url}`)
        .then(res=> {
            debugger
            this.setState({spinner:true})
            this.setState({value:res.data});
            this.setState({spinner:false})
        })      
 }
 componentDidUpdate(preprops, perstate) {
     //debugger
    if(preprops.url === this.props.url) {
        this.setState({spinner:false})
    }
 }
 render() {

    const {url,value,spinner} =this.state;
    if(spinner === true) {
        spinnercomponent.push(
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    } else {
        spinnercomponent.push('');
    }

    //  debugger;
    console.log(url);
    console.log(value);
     return(
        <div>
            <Router>
                <Switch>
                  <Route path="/" exact>
                      {spinnercomponent}
                      <Todudata data={value}/>
                  </Route>
                  <Route path="/posts">
                        {spinnercomponent}
                      <Postdata data={value} />
                  </Route>
                  <Route path="/comments">
                         {spinnercomponent}        
                      <CommentsData data={value} />
                  </Route>
                  <Route path="/user">
                        {spinnercomponent}
                      <Userdata data={value} />
                  </Route>
                </Switch>
                
            </Router>
            
            
        </div>
     )
 }
}
export default ServerData;