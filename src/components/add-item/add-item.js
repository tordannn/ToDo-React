import React from 'react';

import './add-item.css';

export default class AddItem extends React.Component {

    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onLabelChange = (el) => {
            this.setState({
                label: el.target.value
            })
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.addItem(this.state.label);
            this.setState({
                label: ''
            })
        }

    }
    render() {

        return (
            <form className='add-item' onSubmit={this.onSubmit}>
                <input type='text'
                       placeholder='Name of a task'
                       className='form-control d-flex'
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       />

                <button type='button'
                        className=' btn btn-outline-secondary'
                       onClick={this.onSubmit}>
                    Add Item
                </button>
            </form>
        )
    }

}
