import React, { Component } from 'react';
import SideBar from './sideBar';
import axios from 'axios';
// import {Get} from 'react-axios';
// import {TextField} from '@material-ui/core/TextField';
// import Content from './content';

class Main extends Component {
    state ={
        search:''
    }

    handleSearch = (e)=>{
        // console.log(e.target.value)
        this.setState({search:e.target.value});
        // console.log(this.state.search)
        this.sendRequest(e.target.value)
    }

    sendRequest = (quary) =>{
        // console.log(quary)
        axios.get('http://161.35.44.217:8080/api/devices?search='+ quary).then(Response=> console.log(Response)).catch(Error=>console.log(Error))
    }
    
    render(){
        return(
            <div>
                <SideBar/>
                <div className="input-field">
                        <label htmlFor="search">Search</label>
                        <input type="text" id="search" value={this.state.search} onChange={this.handleSearch}/>
                    </div>
                {/* <TextField id="outlined-basic" label="Search" variant="search" /> */}
                {/* <Content/> */}
                <div>
                    
                </div>
            </div>
        )
        
    
}

}

export default Main;