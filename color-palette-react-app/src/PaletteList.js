import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/styles";
import styles from './styles/PaletteListStyles';

export class PaletteList extends Component {
    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`); 
    }
    render() {
        const { palettes, classes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                        <TransitionGroup className={classes.palettes}>
                            {palettes.map((palette,i) => (
                                <CSSTransition key={palette.id} className="fade" timeout={500}>
                                    <MiniPalette 
                                    {...palette} 
                                    key={palette.id}
                                    id={palette.id}
                                    handleClick={() => this.goToPalette(palette.id)}
                                    handleDelete={deletePalette}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);