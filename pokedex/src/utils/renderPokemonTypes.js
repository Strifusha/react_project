export const renderPokemonsTypes = (types) => {        
    return types.map(type => {
        return <span className={`pokemonAbility ability_${type.type.name}`}>{type.type.name}</span>
    }
    );
}
