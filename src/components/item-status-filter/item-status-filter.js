import React from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    buttons = [
            {name: 'all', label: 'all'},
            {name: 'active', label: 'active'},
            {name: 'done', label: 'done'}
        ];

    render() {

        const {filter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button className={`btn ${clazz}` }
                        type="button"
                        key={name}
                        onClick={() => this.props.onFilterChange(name)}> {label} </button>
            )
        })



        return (
            <div className={'btn-group'}>
                {buttons}
            </div>
        )
    }
}