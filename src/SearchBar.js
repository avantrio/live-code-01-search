import React, { useState } from 'react';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');

    const onSearchCahnge = (e) => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);

    }
    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onSearchCahnge} />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
    )
}

export default SearchBar;