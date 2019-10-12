import React from 'react';

import './todo-list-item.css';

const TodoListItem = (props) => {

        let classNames = "TodoListItem";
        if (props.done) {
            classNames += ' done';
        }

        if (props.important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
              <span
                  className="TodoListItemValue"
                  onClick={props.onToggleDone}>
                {props.value}
              </span>
              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={props.onToggleImportant}
              >
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                       onClick={props.onDeleted}>
                <i className="fa fa-trash-o" />
              </button>
            </span>
        );
    }

    export default TodoListItem;