import React, { Component } from 'react';
import Content from './Content';
import './Todo.css'

class Todo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: [
                {
                  text: '해야만한다..!',
                  checked: false
                },
                {
                  text: '해냈다!!',
                  checked: true
                }
            ],
            pushTodo: (todoText) => {
                const newTodoData = [{
                    text: todoText,
                    checked: false
                }];
                this.setState({
                    data: newTodoData.concat(this.state.data)
                });
            },
            deleteTodo: (idx) => {
                let newData = this.state.data;
                newData.splice(idx, 1);
                this.setState({ data: newData});
            },
            textHandler: () => {
                const todoText = this.state.text;
                if(todoText) {
                    this.state.pushTodo(todoText);
                    this.setState({text: ''});
                }
            },
            checkedHandler: (idx) => {
                let newData = this.state.data;
                newData[idx].checked = !newData[idx].checked;
                this.setState({data: newData})
            }
        }
    }

    render() {
        return (
            <section className='todo-container'>
                <div className='todo-input-container'>
                    <input type='text' placeholder={this.props.placeholder}
                        className='input-text'
                        value={this.state.text}

                        onChange={function(e){
                            this.setState({text: e.target.value});
                        }.bind(this)}

                        onKeyUp={function(e){
                            if(e.key === 'Enter'){
                                this.state.textHandler();
                            }
                        }.bind(this)}

                    ></input>
                    <button className='add-btn'
                        onClick={function() {
                            this.state.textHandler();
                        }.bind(this)}
                    >추가</button>
                </div>
                <Content
                    data={this.state.data}
                    deleteTodo={this.state.deleteTodo}
                    checkedHandler={this.state.checkedHandler}
                />
            </section>
        )
    }
}

export default Todo;