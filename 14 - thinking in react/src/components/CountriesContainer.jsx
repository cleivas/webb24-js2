import { CountryCard } from "./CountryCard"

export function CountriesContainer({countries}){

    return (
        <div>
            {countries.map(
                ({name, flag, region }) => <CountryCard key={name} name={name} region={region} flag={flag}/> 
                )}
        </div>
    )
}