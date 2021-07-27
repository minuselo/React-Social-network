import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import React from "react";


export let reRender = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

