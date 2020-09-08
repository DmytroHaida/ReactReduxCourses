import React from 'react';
import preloaderIMG from '../../../assets/img/preloader.gif'
let Preloader = () => {
    return (
        <div className="userPreloaderLayer">
            <img className="preloaderIMG" src={preloaderIMG} alt='Preloading' />
        </div>
    );

}

export default Preloader;