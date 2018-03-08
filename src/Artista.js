import React, { Component } from 'react';
import './Artista.css';

class Artista extends Component {
  render() {

    const {img,artista,biografia} = this.props.user;
    const musicArtis = this.props.user.canciones.map((cancion,index)=>{
      return <li key={index}>{cancion}</li>
  })

    return (
      <div className="music-card"> 
            <div className="music-card-image">
                <img src={img} alt={artista} />
            </div>
            <div className="music-card-content">   
                <h3 className = "music-title-artist">{artista}</h3> 
                <ul>{musicArtis}</ul>
                <p>{biografia}</p>
            </div>
        </div>
    );
  }
}

export default Artista;
