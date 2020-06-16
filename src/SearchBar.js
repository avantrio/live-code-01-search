import React, { useState, useEffect } from 'react';
import Constants from './Constants';
import axios from 'axios'

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('samsung');
    const [url, setUrl] = useState(Constants.BASEapi);
    const [token, setToken] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6Im5pcHVuYSIsImV4cCI6MTU5MjMwMDU1MSwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTU5MjI5Njk1MX0.3LzDNysr_2OygEuEGVaLRM7hZ66Skgw8W-nidMRoDEQ");
    const [list, setList] = useState([]);

    useEffect(() => {
        onSearch();
    }, [])
    const onSearchCahnge = (e) => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);

    }

    const onSearch = () => {

        axios.get("http://161.35.44.217:8080/api/devices?search=samsung", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            console.log(res);

            setList(res.data.data);

        })



    }
    console.log(list);
    return (
        <div class="input-group mb-3" style={{ marginTop: 50 }}>
            <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onSearchCahnge} />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
    )
}

export default SearchBar;