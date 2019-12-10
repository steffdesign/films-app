import React,{Component} from 'react';

class Nav extends Component {
    render(){
        return(
        <nav className='navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-primary fixed-top'>
            <div className='container'>
                <a className='navbar-brand' href='/'>Star Wars Films</a>
            </div>
        </nav>
        )
    };
};
export default Nav;