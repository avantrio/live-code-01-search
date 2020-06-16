import React, {Component} from 'react';
import './App.css';
import Search from "./Search";
import SideBar from "./SideBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'lll'
        };
    }

    render() {
        return(
            <div style={{height: '100%',display: 'flex'}}>
                <div>
                <SideBar/>
                </div>
                <div>
                <Search/>
                </div>
            </div>
        );
    }
}
export default App;
