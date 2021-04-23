import React,{Component} from 'react'
import axios from 'axios';
import {URL} from '../../constants/const'

const Server = axios.create({
    baseURL : URL,
});
export default Server;