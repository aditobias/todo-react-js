import React from 'react'

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.todoItemName
        };
    }

    render(){
        return (
            <div>
                <input name = "done-todo" type="checkbox" class="done-todo"/><span>{this.state.name}</span>
            </div>
        );
    }
}

export default TodoItem;