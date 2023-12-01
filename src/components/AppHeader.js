import React, { Component } from 'react';
import './AppHeader.css'

class AppHeader extends Component {
    render() {
        return (
            <header className="todo-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <div className="title">
                    {this.props.title}
                </div>
            </header>
        )
    }
}


export default AppHeader;