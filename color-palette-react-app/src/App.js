import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
    }

  }
  findPalette = (id) => {
    return this.state.palettes.find(function(palette){
      return palette.id === id
    });
  }

  savePalette = (newPalette) =>{
    this.setState({palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  };

  syncLocalStorage(){
    //save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Switch>
        <Route 
        exact
        path="/palette/new"
        render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} 
        palettes={this.state.palettes}
        {...routeProps}/>}
        />
        <Route 
        exact 
        path="/palette/:palette/:colorId" 
        render={(routeProps) => ( 
          <SingleColorPalette
          colorId={routeProps.match.params.colorId} 
          palette={generatePalette(this.findPalette(routeProps.match.params.palette)
          )}/>
          )}
        />
        <Route 
        exact 
        path="/"
        render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps}/>}/>
        <Route 
        exact 
        path='/palette/:id'
        render={routeProps => (<Palette 
          palette={generatePalette(this.findPalette(routeProps.match.params.id)
          )}/>
          )}
        />
      </Switch>
    );
  }
}

export default App;
