import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = { 
        count: 0,
    };

    styles = {
        fontWeight: '10px',
        fontSize: 50
    };

    render() {
        let classes = "badge m-2";
        
        return (
            <div>
                <span style={this.styles} className= "m-2">
                    {this.formatCount()}
                </span>
                <h1>Hello guys</h1>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter; 