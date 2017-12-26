import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './index.css'

class Home extends Component {
    state = {
        name: ''
    }
    handleInputChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.name !== '') {
            this.props.history.push(`/greet/${this.state.name}`);
        }
    }

    render() {
        return (
            <div className='home' >
                <h1>Home Component</h1>
                <form onSubmit={this.handleClick}>
                    <input
                        type='text'
                        placeholder='Who do you want to greet?'
                        value={this.state.setName}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Greet!</button>
                </form>
            </div>
        );
    }

}

const Greeter = (props) => {
    console.log(props)
    return (
        <div className='about'>
            <h1>Hello {props.match.params.name}!</h1>
        </div>
    );
}

const About = (props) => {
    setTimeout(() => { props.history.push('/'); }, 3000);
    return (
        <div className='about'>
            <h1>About Component</h1>
        </div>
    );
}
const Header = () => {
    return (
        <div className='nav'>
            <NavLink to='/' className='link' activeClassName='link--active' exact>Home</NavLink>
            <NavLink to='/about' className='link' activeClassName='link--active'>About</NavLink>
            <NavLink to='/xtra' className='link' activeClassName='link--active'>Xtra</NavLink>
        </div>
    );
}


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/greet/:name' component={Greeter} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));