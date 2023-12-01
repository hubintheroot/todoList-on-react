import React, { Component } from 'react';
import './Content.css'

class Content extends Component {

    render() {
        const data = this.props.data;
        let todoList = [];

        data.forEach((todo, idx) => {
            todoList.push(
                <li key={idx} className='todo-list'>
                    <div className='todo-wrapper'>
                        <input 
                            type='checkbox' 
                            id={idx}
                            checked={todo.checked}
                            onChange={function(){
                                this.props.checkedHandler(idx);
                            }.bind(this)}>
                        </input>
                        <label htmlFor={idx} className={todo.checked?'checked':'unchecked'}>{todo.text}</label>
                    </div>
                    <button 
                        className='del-btn'
                        onClick={function(){
                            this.props.deleteTodo(idx);
                        }.bind(this)}>X</button>
                </li>
            );
        });

        return (
            <div className='todo-list-container'>
                <ul>
                    {todoList}
                </ul>
            </div>
        )
    }
}

export default Content;