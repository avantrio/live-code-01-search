import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jj: ''
        }

    }

    render() {
        return(
            <div style={{background: "skyblue"}}>
                Username
                <Avatar/>
                Status
            </div>
        );
    }
}
export default SideBar;