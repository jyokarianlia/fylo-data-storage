import React, { Fragment } from 'react'
import './storage.css'

const Storage = () => {
    let usedStorage = 815;
    return (
        <Fragment>
            <div className="contenedor-storage">
                <p>You've used <span className='color-resalto'>{ usedStorage }GB</span> of your storage.</p>

                <div className="progress-bar">
                    <div className='avance'>
                        <div className='puntero'></div>
                    </div>
                </div>

                <p className='color-resalto'>0 GB</p>
                <span className='texto-info color-resalto'>1000 GB</span>
            </div>

            <div className="dialogo">
                <p className='dialog-number'>185 <span className='dialog-text'>GB LEFT</span></p>
            </div>

            <div className="triangulo"></div>

            <div className="fondo"></div>
        </Fragment>
    );
}

export default Storage;