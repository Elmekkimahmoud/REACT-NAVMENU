import React, { Component } from 'react';
class Navmenu extends Component {
 
    constructor() {
        super();
        this.state = {
          color: "black", 
          drope:"secandlist"
        };
      }
      
      onHandlChange=()=>{
         if( this.state.drope ==="secandlist") 
     {   this.setState({ drope: "kk", color:'blue' })}
     else  {   this.setState({ drope: "secandlist"})}
        
       }


    render() { 
        return ( 
            <section>         
                <div className='mainlist'>
                    <ul>
                        <li>Home</li>
                        <li className ={this.state.color} onMouseOver={this.onHandlChange} onMouseOut={this.onHandlChange}>Services </li>
                        <li>Contact</li>

                    </ul>

                </div>
                <div className ={this.state.drope}>
                    <ul>
                        <li> For entrepreneurs</li>
                        <li> For students </li>
                        <li>For hoppyists</li>

                    </ul>

                </div>
            
            
            </section>  


            
            );
        }
    }
     
    export default Navmenu;