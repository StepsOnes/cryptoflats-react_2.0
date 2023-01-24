import React from 'react';
import logo from '../../../assets/img/icons/logo.svg';
import './preload.scss'

const Preload = (props) => {
    return (
        <div id="preload" className="preload">
            <div className="preload-body">
                <div className="key-anim">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Preload;