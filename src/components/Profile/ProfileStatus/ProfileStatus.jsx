import * as React from "react";
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    editStatus = () => {
        this.setState({
            editMode: true
        });
    }

    confirmStatus = () => {
        this.setState({
            editMode: false
        });
    this.props.updateStatus(this.state.status);
    }
    statusChange = (e) => {
        this.setState(
            {
                status: e.target.value
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status!==prevProps.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.Status}>
                {!this.state.editMode ?
                    <p onDoubleClick={this.editStatus}>{!this.props.status?'Расскажите о себе':this.props.status}</p> :
                    <input autoFocus={true} onBlur={this.confirmStatus} value={this.state.status}
                           onChange={this.statusChange} type="text"/>
                }
            </div>
        );

    }
}


export default ProfileStatus;