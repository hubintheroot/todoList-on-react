import logo from './logo.svg';
import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import Todo from './components/Todo';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      title: "Todo List",
      logo: logo,
      placeholder: "할 일을 입력하세요",
    };
  }


  render() {
    return (
      <div className="App">
        <AppHeader 
          title={this.state.title}
          logo={this.state.logo}
        />
        
        <Todo 
          placeholder={this.state.placeholder}
        />
      </div>
    )
  }
}

export default App;
