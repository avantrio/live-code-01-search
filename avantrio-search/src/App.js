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
            <div>
                <SideBar/>
                <Search/>
            </div>
        );
    }
}
export default App;
