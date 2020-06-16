import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {SearchAPI} from "./apis/SearchAPI";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSearchClicked = this.handleSearchClicked.bind(this);
    }

    handleUserInput(event) {
        this.setState({input: event.target.value});
        console.log(event.target.value);
    }

    handleSearchClicked() {
        console.log(this.state.input);
        SearchAPI.getResult(this.state.input)
            .then((response) => {
                console.log(response);
                /*this.setState({siddhiAppList:response.data});
                this.forceUpdate();*/
            })
            .catch(error => {
                console.log(error.response);
            });

    }

    render() {
        return(
        <div>
            <TextField
                id="searchBox"
                label="Search"
                variant="outlined"
                onChange={this.handleUserInput}
            />

            <Button onClick={() => {this.handleSearchClicked()}}>Search</Button>
        </div>
        );
    }
}
export default Search;