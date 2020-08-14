import React, { Component } from 'react';
import './ColorBox.css';
// import './Palette.css';

export class ColorBox extends Component {
    render() {
        return (
            <div style={{background: this.props.background}} className="ColorBox">
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default ColorBox
