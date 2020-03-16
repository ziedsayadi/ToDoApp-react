import React  from 'react';

import DoApp from'./DoApp' ;


 class Items extends React.Component {

    
        
        state={
            todolist:[]
        };
    
    addto= (el) =>{
        this.setState({
            todolist: [...this.state.todolist, el],

        
          });

    }
    completedtask= (e) =>{
        this.setState({
            completed:[...this.state.todolist.map((el,i)=> i === e ? el.completed = !el.completed : el.completed)]





        
        })
    }
    
     remove = (e) =>{
    
         this.setState({
             todolist: this.state.todolist.filter((el,i)=> e !== i)})


     }

    
        
    




    render() {
        console.log(this.state.todolist)
        return (
            <div >
                <DoApp info={this.addto}/>
                {this.state.todolist.map( (tab,i) =>(<div className="element" objet={tab.m}><h1 className={tab.completed? "complete":"undo"}> {tab.zone}</h1>
                <div className="Btn">
                <button className="button-1"  type='button' onClick={()=>this.completedtask(i)}>{tab.completed ? 'complete':'undo'} </button>
                <button className="button-2"  type='button' onClick={()=>this.remove(i)}>remove </button>
                </div>
                </div>)
                )}



                
            </div>
        )
    }
}



export default Items;