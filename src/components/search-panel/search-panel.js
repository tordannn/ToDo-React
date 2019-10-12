import React from 'react';

import './search-panel.css';
import '../add-item/add-item';

export default class SearchPanel extends React.Component  {

    constructor() {
        super();

        this.state = {
            term: ''
        };

        this.onSearchChange = (el) => {
            this.setState({
                term: el.target.value
            });
            this.props.onSearchChange(el.target.value);
        }
    }

    render () {
        return (
            <div >
                <input className='form-control search-input'
                       placeholder="search"
                       value={this.state.term}
                       onChange={this.onSearchChange}/>
            </div>

        );
    }

};