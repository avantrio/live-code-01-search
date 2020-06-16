import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ResultsComponent from './ResultsComponent';

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

            <ResultsComponent 
                results={
                    [
                        {
                          "id": 1,
                          "state": "Finalized",
                          "phone_type": "High End",
                          "name": "Samsung Gaalxy",
                          "model": "S10"
                        },
                        {
                            "id": 2,
                            "state": "Released",
                            "phone_type": "High End",
                            "name": "Samsung",
                            "model": "A10"
                        },
                        {
                            "id": 683435089,
                            "state": "finalized",
                            "phone_type": "Phone",
                            "name": "Samsung Galaxy Note 4Samsung Galaxy Note 4Samsung Galaxy Note 4",
                            "model": "SM-N910T"
                        },
                        {
                            "id": 683435090,
                            "state": "finalized",
                            "phone_type": "Phone",
                            "name": "Samsung Galaxy Note 4Samsung Galaxy Note 4Samsung Galaxy Note 4",
                            "model": "SM-N910V"
                        },
                        {
                            "id": 683435092,
                            "state": "finalized",
                            "phone_type": "Phone",
                            "name": "Sprint Cell PhonesSamsung Galaxy Note 4Samsung Galaxy Note 4 Sprint",
                            "model": "SM-N910P"
                        },
                        {
                            "id": 683435093,
                            "state": "finalized",
                            "phone_type": "Phone",
                            "name": "Samsung Galaxy Note 4Samsung Galaxy Note 4Samsung Galaxy Note 4",
                            "model": "SAMSUNG-SM-N910A"
                        },
                        {
                            "id": 683435100,
                            "state": "finalized",
                            "phone_type": "Phone",
                            "name": "Samsung Galaxy AvantSamsung Galaxy AvantSamsung Galaxy Avant",
                            "model": "SM-G386T"
                        }
                    ]
                }
            />
        </div>
        );
    }
}
export default Search;