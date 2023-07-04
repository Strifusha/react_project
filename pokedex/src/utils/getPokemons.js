async function getInfoByUrl(shortPokemonList) {
  
    let pokemonUrs = shortPokemonList.map(item => item.url)
      
    const pokemonData = await Promise.all(
  
      pokemonUrs.map(async (url) => {
          const response = await fetch(url);
          const pokemonDetails = await response.json();
          return pokemonDetails;  
      })
    );
  
    return pokemonData
  }
  
  export function getPokemons(){
      let url = `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`;
          
          fetch(url) 
          .then(responseStatus)
          .then(json)
          .then(async (data) => {
              const dataPokemons = await getInfoByUrl(data.results);
              this.setState({ items: dataPokemons });
          })
          .catch(function(err){
              console.log('error -->', err)
          })
          
  }
  
  function responseStatus(response){
      if(response.status !== 200){
          return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response);
  }
  
  function json(response){
      return response.json();
  }
  
