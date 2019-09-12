import React, { Component } from 'react'
import { Table } from 'reactstrap';
import TableBody from './Tablebody.js'
import TableHeader from './TableHeader.js'

class CharacterTable extends Component {
    render() {
        const { pokemonData } = this.props;
        return (
            <Table striped>
                <TableHeader />
                <TableBody pokemon={pokemonData}/>
            </Table>
    )
    }
}

export default CharacterTable