import React from 'react';
import preloader from "../../../assets/img/Reload-1.6s-200px.gif";
import s from "./Preloader.module.css";

let Preloader= (props)=>{
    return <div className={s.Preloader}><img src={preloader} className={s.PreloaderImg}/></div>
}

export default Preloader;