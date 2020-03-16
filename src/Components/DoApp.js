import React from 'react';



class DoApp extends React.Component {

state ={
        enterTask:''
    }

    Change= (e)=> {
        this.setState({enterTask: e.target.value});
      }
    
      Submit=(el)=>{
          if(this.state.enterTask.trim()){
              el.preventDefault();
              this.props.info({
                zone:this.state.enterTask,
                completed : false,
                id : Date.now()
              })
              
            
          

          this.setState({enterTask: ''})
        }

              else {el.preventDefault();
                alert('submit a task')}
      }







    render() {
        return (
            <div className="todo">
                <h1>To-Do-App</h1>
                <form onSubmit={this.Submit}>
                    <label>Add new to-do </label>
                    <input type="text" value={this.state.enterTask}  className="newtask"onChange={this.Change} ></input>
                    <button className="add"  type="button" onClick={(el)=>this.Submit(el)}>Add</button>
                </form>
                
            </div>
        )
    }
}





export default DoApp;