export const renderPokemonAbilities = (abilities) => {
      return abilities?.map(ability =>{
          return <span key ={ability.ability.name} className = 'spanAbility'> {ability.ability.name}</span>        
  })
  }