import React from 'react';
import SearchBar from './SearchBar';
import ListView from './ViewList';
import ResultsComponent from './ResultsComponent';

function Home() {
    return (
        <div >

            <SearchBar />
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
    )
}

export default Home;