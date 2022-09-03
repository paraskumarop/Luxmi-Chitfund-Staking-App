import React, {Component} from 'react'
import bank from '../bank.png'
import './App.css'
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-dark fixed-top shadow p-0' style={{
                    backgroundColor:'white',
                    height:'50px',
                    opacity:'0.8'
                }}>
                    <a className='navbar-brand col-sm-3 col-md-2 mr-0' style={{color:'Black'}}> 
                    <img src ={bank} width='50' height='30' className='d-inline-block align-top' alt='bank'/>
                    &nbsp;
                    LAXMI CHITFUND
                     </a>

                    <ul className='navbar-nav px-4'>
                        
                        <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                            <small style={{color:'black' }}>ACCOUNT NUMBER:{this.props.account}

                            </small>
                        </li>
                    </ul>
                    
                    
                    
                    
                </nav>
            
            
            </div>

        )
            
    }
 }
 export default Navbar;

