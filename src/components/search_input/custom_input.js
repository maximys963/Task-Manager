import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as search_actions from '../../action_creators/search_ac';
import './custom-input.css';

const SearchInput = (props) => {
    const { searchTask } = props;

    return (
        <div className='search-container'>
            <Input 
                className='search-input'
                icon='search'
                placeholder='Search...'
                onChange={(e) => searchTask(e.target.value)}
            />
        </div>
    );};

export default connect(null, search_actions)(SearchInput);