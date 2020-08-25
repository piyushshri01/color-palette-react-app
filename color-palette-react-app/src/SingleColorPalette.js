import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Navbar from './Navbar'; 
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';

import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';


export class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = ({ format : 'hex'});

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
    changeFormat = (val) => {
        this.setState({ format: val});
    }
    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
            key={color.name} 
            name={color.name}
            background={color[format]}
            showingFullPalette={false}/>
        ))
        return (
            <div className={`SingleColorPalette ${classes.Palette}`}>
                <Navbar 
                handleChange={this.changeFormat}
                showingAllColors={false}
                />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}/`} className="back-button">Go Back</Link>
                    </div>
                </div>
                <PaletteFooter 
                paletteName={paletteName}
                emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
