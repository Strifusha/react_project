export const renderPokemonsTypes = (types) => {        
    return types.map(type => {
        return <span key={type.type.name} className={`pokemonAbility ability_${type.type.name}`}>{type.type.name}</span>
    }
    );
}
