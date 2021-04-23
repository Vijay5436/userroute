import React from 'react';
import '../App.css';
import {Nav, Navbar} from 'react-bootstrap';
import Todos from './RouteContantFile/todos';
import Users from './RouteContantFile/users';
import Comments from './RouteContantFile/comments';
import Posts from './RouteContantFile/posts';
import Photos from './RouteContantFile/serverItems/photosData'
import Album from './RouteContantFile/serverItems/albumData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

class MainComponent extends React.Component {
    render() {
        return(
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Contant Manager</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link ><NavLink exact to="/" className="main-nav" activeClassName='main-nav-active'>Todos</NavLink></Nav.Link>
                        <Nav.Link ><NavLink exact to="/user" className='main-nav' activeClassName='main-nav-active'>User</NavLink></Nav.Link>
                        <Nav.Link ><NavLink exact to="/posts" className='main-nav' activeClassName='main-nav-active'>Post</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to="/comments" className='main-nav' activeClassName='main-nav-active'>Comments</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to="/photos" className='main-nav' activeClassName='main-nav-active'>Photos</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to="/albums" className='main-nav' activeClassName='main-nav-active'>Albums</NavLink></Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/" exact>
                        <Todos />
                    </Route>
                    <Route path="/user">
                        <Users />
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/comments">
                        <Comments />
                    </Route>
                    <Route path="/photos">
                        <Photos />
                    </Route>
                    <Route path="/albums">
                        <Album />
                    </Route>
                    
                </Switch>
            </Router>
        )
    }
}
export default MainComponent; 