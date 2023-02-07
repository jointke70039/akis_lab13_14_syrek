import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../style/CHeader.css'


class CHeader extends Component{
    render(){
        return (
            <><div className='headerContainer'>
                <img src={logo} className='headerLogo' alt="logo"></img>
                <h1>Jak się nie spoźniać - zegarki</h1>
            </div></>
        );
    }
}
export default CHeader;