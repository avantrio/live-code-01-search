import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

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