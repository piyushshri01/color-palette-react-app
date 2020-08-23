import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";



export class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPaletteName: "",
        }
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
        this.props.palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
      );
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    render() {
        const { classes, open, handleDrawerOpen } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div>
                <CssBaseline />
                <AppBar
                position='fixed'
                color='default'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                    Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <TextValidator
                    label="Palette Name" 
                    value={this.state.newPaletteName}
                    name="newPaletteName"
                    onChange={this.handleChange}
                    validators={["required", "isPaletteNameUnique"]}
                    errorMessages={["Enter Palette Name", "Name already used"]}
                    />
                    <Button
                    variant='contained'
                    color='primary'
                    type='submit'>
                    Save Palette
                    </Button>
                    <Link to="/">
                    <Button variant="contained" color="secondary">Go Back</Button>
                    </Link>
                </ValidatorForm>
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default PaletteFormNav
