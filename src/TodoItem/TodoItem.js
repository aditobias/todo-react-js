import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.todoItemName,
            withinStatus : false
        };
    }

    changedState = () => {
        this.setState({withinStatus : !this.state.withinStatus})
    }

    render(){
        return (
            <div>
                <input type="checkbox" onChange={this.changedState}/>
                <span className={this.state.withinStatus ? 'checked' : ''}>{this.state.name}</span>
            </div>
        );
    }
}

export default TodoItem;