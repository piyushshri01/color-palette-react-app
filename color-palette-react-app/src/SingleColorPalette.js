import React, { Component } from 'react';
import ColorBox from './ColorBox';

export class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades[0]);
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
        //return all shades of given color
    }
    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
            key={color.id} 
            name={color.name}
            background={color.hex}
            showLink={false}/>
        ))
        return (
            <div className="Palette">
                <h1>SINGLE COLOR PALETTE</h1>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default SingleColorPalette
