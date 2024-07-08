import React from 'react';
import playlistImage from './assets/playlist.png'; // Asegúrate de tener esta imagen en tu carpeta de assets

function Musica() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Weás pero con Música</h1>
        <img
          src={playlistImage}
          alt="Playlist Image"
          style={{ width: '300px', height: '300px' }}
        />
        <h3>Mi lista de reproducción de Spotify</h3>
        <iframe style={{ borderRadius: '15px'}} src="https://open.spotify.com/embed/playlist/7Kagci92Tpvxnh8ZX3h8WD?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
        <h3>Sígueme en las redes sociales</h3>
        <a href="https://www.facebook.com/your_username">Facebook</a><br/>
        <a href="https://www.twitter.com/your_username">Twitter</a><br/>
        <a href="https://www.instagram.com/your_username">Instagram</a><br/>
      </div>
    </>
  );
}

export default Musica;