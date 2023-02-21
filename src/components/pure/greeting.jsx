import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age : 29,
        }
    }
    render() {
        return (
            <div>
                <h1>!HOLA {this.props.name}!</h1>
                <h2>Tu edad es de: {this.state.age}</h2>
                <button onClick={this.birthday}>Cumplir Años</button>
            </div>
        );
    }

    birthday = () =>{
        this.setState((prev)=> (
                {
                    age: prev.age + 1
                }
            )
        )
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
