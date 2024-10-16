export function CountryCard({name, region, flag}){
    
    return (
        <div>
            <h1>{name}</h1>
            <p>{region}</p>
            <img src={flag} alt="" />
        </div>
    )
}