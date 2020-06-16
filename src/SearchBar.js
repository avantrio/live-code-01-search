import React, { useState } from 'react';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
    )
}

export default SearchBar;