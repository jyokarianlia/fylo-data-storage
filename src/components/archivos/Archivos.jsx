import React from 'react';
import './archivos.css';
import logo from '../../images/logo.svg';
import documento from '../../images/icon-document.svg';
import folder from '../../images/icon-folder.svg';
import upload from '../../images/icon-upload.svg';

const Archivos = () => {
    return (
        <div className="contenedorArchivos">
            <img className="logo" src={ logo }alt=""/>

            <div className="img-archivo">
                <img src={ documento } alt=""/>
            </div>
            <div className="img-archivo">
                <img src={ folder } alt=""/>
            </div>
            <div className="img-archivo">
                <img src={ upload } alt=""/>
            </div>
        </div>
    );
}

export default Archivos;