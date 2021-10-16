import React, { Component } from 'react';

class Headercomponent extends Component {


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="google.pl" className="navbar-brand">Employee Management App</a>
                        </div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default Headercomponent;
