export const renderPokemonsStats = (pokemon) => {

    let pokemonStats = pokemon?.stats.map(stat =>{
        return <>
            <span key ={stat.stat.name} className = 'spanInfo'> {stat.stat.name}</span> 
            <span key ={stat.base_stat} className = 'spanInfo'> {stat.base_stat}</span>         
        </>
    })
    return pokemonStats
  
}