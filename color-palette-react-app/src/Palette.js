import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export class palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map((color, i) => (
            <ColorBox key={i} background={color.color} name={color.name}/>
        ));
        return (
            <div className="Palette">
            {/* Navbar goes here */}
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            {/* footer eventually */}
            </div>
        )
    }
}

export default palette
