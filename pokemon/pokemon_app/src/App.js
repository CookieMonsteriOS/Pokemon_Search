import React, {Component} from 'react';
import API from './api/API.js'
import CharacterTable from './components/CharacterTable'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class App extends Component {

    constructor() {
        super();
        this.state = {
            pokemon:[],
            searchTerm:'',
            defaultState:[]
        }
    }
    componentWillMount(){
        this.getPokemon();

    }
    //load Pokemon
    getPokemon =()=>{
         API.getPokemon('GET','/pokemon/',151,20).then(data =>{
             this.setState(state => {
                 state.pokemon = data.results;
                 state.defaultState = data.results;
                 return state
             })
         }).catch((err) =>{
             console.log('Sorry there has been an error',err);
         })
    }

    //Search/Filter by name
    pokemonSearch = (e) =>{
        e.preventDefault();
        let pokemonName = e.target.value;
        let filteredPokemon = this.state.pokemon
        filteredPokemon = filteredPokemon.filter((character) => {
            let characterName = character.name.toLowerCase();
            return characterName.indexOf(
                pokemonName.toLowerCase()) !== -1
            })
            this.setState({pokemon:filteredPokemon, searchTerm:pokemonName})
    }

    //Reset
    resetSearch = () =>{
        this.setState(state => {
            state.pokemon = state.defaultState;
            state.searchTerm = '';
            return state
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h2>Find a Pokemon </h2>
                </header>
                <p>Enter the name of a Pokemon below and click Reset when finished or to search again.</p>
                <InputGroup>
                    <Input placeholder= "" value={this.state.searchTerm}  onChange={this.pokemonSearch} />
                    <InputGroupAddon addonType="append">
                    <Button color="success" onClick={this.resetSearch}>Reset</Button>
                    </InputGroupAddon>
                </InputGroup>
                <br/>
                <h4>Pokemon List</h4>
                <CharacterTable pokemonData = {this.state.pokemon}/>
            <br/>
        </div>
    );

    }
}

export default App;



