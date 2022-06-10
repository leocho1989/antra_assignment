import "./styles.css";
import React from 'react';

export default class App extends React.Component {

  state = {
    albums:[],
    artistName : ""
  }


  seachResults(e) {
    this.setState({artistName: e.target.value});
    if (e.key === "Enter") {this.searchAlbums()}
  }


  searchAlbums() {
    fetch(`https://itunes.apple.com/search?term=${this.state.artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
    .then((response) => response.json())
    .then((items) =>this.setState({albums:items.results}))
  }



 render() {
   
    return (
    <div className="App">
      <h1>Album search</h1>
      <input type="text"
        name="searchBar"
            id="search_input"
            placeholder="search" onKeyPress={(e) =>this.seachResults(e)} >
          </input>

          <button id="search_btn" onClick={()=>this.searchAlbums()}>
            🔍
          </button>


          <div class="album">

<ul id="album_content"> 
{this.state.albums.map((album) =>(
<li className = "single_album">
<h2>{album.collectionName}</h2>

            <p>{album.collectionPrice}</p>
           
            <img src={album.artworkUrl100}></img>

         
          </li>
          ))

}
          </ul>


         
          
          </div>
             </div>
  );
 }
}
