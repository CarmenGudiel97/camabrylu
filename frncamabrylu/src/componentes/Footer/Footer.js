import React, {Component} from 'react';
import {IoIosLogIn, IoIosHome} from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
        this.counterUpdate = this.counterUpdate.bind(this);
    }
    counterUpdate(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({counter:this.state.counter+1});
    }
    render(){
        return (
        <footer>
            <nav>
                <ul>
                    <li><NavLink to="/"><IoIosHome />Home</NavLink></li>
                    <li><NavLink to="/login"><IoIosLogIn />Login</NavLink></li>
                </ul>
            </nav>
        </footer>
        );
    }
}