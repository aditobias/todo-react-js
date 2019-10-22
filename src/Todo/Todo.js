import React from 'react'

import TodoItem from '../TodoItem/TodoItem'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoItem : '',
            list : []
        };

    }
    
    
    regenerateTodo = () =>{
        this.setState(state => {
            const varList = state.list.push(<TodoItem key={this.state.todoItem} todoItemName ={this.state.todoItem} />);
            return {varList, todoItem: ''};
        });
   }

   handleInputChange = (event) =>{
    this.setState({
        todoItem : event.target.value
        })
    };

    render(){
        return (
            <div>
                <div>
                    <input type = "text" value={this.state.toDo} onChange={this.handleInputChange}/>
                    <button onClick={this.regenerateTodo}>Todo</button>
                </div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;