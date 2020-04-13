import React, { Fragment } from 'react';

const SearchBox = ({searchfield, onSearchChange}) => {
    return (
        <Fragment className = 'pa2'>
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
            />
        </Fragment>
    );
}




export default SearchBox;