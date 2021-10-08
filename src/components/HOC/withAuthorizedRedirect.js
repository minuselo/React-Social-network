import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps=(state)=>({
    isAutorized: state.auth.isAuth
});


export let withAuthorizedRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isAutorized){
                return <Redirect to='/login' />
            }

            return <Component {...this.props} />
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
}

