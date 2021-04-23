import React from 'react';
import {Spinner } from 'react-bootstrap';
import ServerData from '../server';
class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            urltodu:`todos`,
        }
    }
    render() {
        const {urltodu} =this.state;
        return(
            <div>
                <h1>Todus</h1>
                <ServerData url={urltodu} />
            </div>
        )
    }
}
export default Todos;