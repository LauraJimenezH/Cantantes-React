import React, { Component } from 'react';
import Artista from './Artista'
import './MusicApp.css';

const artistasAll = [
  {
    artista : 'Shakira',
        biografia : 'Cantante',
        img : 'shakira.jpg',
        canciones : ['Ojos Asi','Inevitable','Tu']
  },
  {
    artista : 'Ricky Martin',
        biografia : 'Cantante',
        img : 'ricky.jpg',
        canciones : ['Disparo al corazon','Tal ves','Vuelve']
  },
  {
    artista : 'Maluma',
        biografia : 'Cantante',
        img : 'maluma.jpg',
        canciones : ['Corazon','Carnaval','Felices los 4']
  }
];

const ArtistasList = props => {
  const artistasList = props.list.map((user,i) => <Artista user={user} key={i} />);
  return (
    <div>
      {artistasList}
    </div>
  )
}

class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <ArtistasList list={artistasAll}/>
      </div>
    );
  }
}

export default MusicApp;
