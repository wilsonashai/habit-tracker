import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div id="nav" className="flex-group">
                <a href="/"><h2 className="logo"><span>habit </span>trakr</h2></a>
                <ul className="navlinks flex-group">
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/createhabit">Create</a>
                    </li>
                    <li>
                        <a href="/">My Habits</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;