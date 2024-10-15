export async function fetchCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const res = await fetch(url);
    const data = await res.json();

    // Mappar data-arrayen med all info om alla länder till
    // countries som då kommer innehålla en lika lång array men där varje land endast har infon som vi är intresserade av;
    // console.log(data)
    const countries = data.map(
        country => {
        return {
            name: country.name.common,
            flag: country.flags.png,
            region: country.region
        }
    }
    );

    console.log(countries)
    return countries;
}