// Skapa en komponent som har en lista med tre punkter

// Lägg till så att ett två tre kommer från en array via props

export function Likes({likes}){
    console.log(likes)
    return (
        <>
            <h2>Det här är saker som du gillar</h2>
            <ul>
                <li>{likes[0]}</li>
                <li>{likes[1]}</li>
                <li>{likes[2]}</li>
            </ul>
        </>
    )
}