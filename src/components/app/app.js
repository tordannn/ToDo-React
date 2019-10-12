import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from "../item-status-filter";
import TodoList from '../todo-list';
import AddItem from "../add-item/add-item";

import './app.css';

export default class App extends React.Component {

    constructor() {
        super();

        let itemId = 100;

        this.createElement = (value) => {
            return {
                value,
                important: false,
                done: false,
                id: itemId++
            }
        };

        this.state = {
            todoData: [
                this.createElement('Drink Coffee'),
                this.createElement('Learn React'),
                this.createElement('Learn Redux'),
                this.createElement('Become developer'),
            ],
            term: '',
            filter: '' // active / all / done
        };

        this.deleteItem = (id) => {
            this.setState (({todoData}) => {
                const index = todoData.findIndex((item) => item.id === id);
                const before = todoData.slice(0, index);
                const after = todoData.slice(index + 1);

                const newArray = [...before, ...after];
                return {
                    todoData: newArray
                }
            })
        };

        this.addItem = (value) => {
            const newItem = this.createElement(value);

            this.setState(({todoData}) => {
                const newArr = [...todoData, newItem];

                return {
                    todoData: newArr
                }
            })
        };

        this.toggleProperty = (arr, id, propName) => {
            const itemIndex = arr.findIndex((item) => item.id === id);
            const oldItem = arr[itemIndex];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            return [
                ...arr.slice(0, itemIndex),
                newItem,
                ...arr.slice(itemIndex + 1)
            ]

        };

        this.onToggleDone = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                }
            })
        };

        this.onToggleImportant = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            })
        };

        this.search = (items, term) => {

            if (items.length === 0) {
                return items
            }

            return items.filter((item) => {
                return item.value.toLowerCase().indexOf(term) > -1
            })
        }

        this.onSearchChange = (term) => {
            this.setState({
                term: term
            })
        }

        this.filter = (items, filter) => {
            switch (filter) {
                case 'all': return items;
                case 'active': return items.filter((item) => !item.done);
                case 'done': return items.filter((item) => item.done);
                default: return items;
            }
        }

        this.onFilterChange = (filter) => {
            this.setState({
                filter: filter
            })
        }
    };

    render() {

        const { todoData, term, filter } = this.state;
        const doneItems = todoData.filter((el) => el.done).length;

        const todoItem = todoData.length - doneItems;
        const visibleItems = this.filter(
            this.search(todoData, term), filter);

        return (
            <div className='todo-app'>
                <AppHeader todo={todoItem} done={doneItems}/>
                <div className='top-panel d-flex justify-content-between'>
                    <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter}
                    onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                />
                <AddItem addItem={this.addItem}/>
            </div>
        )
    }
};
