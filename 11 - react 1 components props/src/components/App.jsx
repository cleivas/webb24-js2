import { ProfileCard } from "./ProfileCard";



export function App() {

    // Vi kan tänka oss att den här infon kommer från ett tredjeparts API
    const users = [{
        name: "Aquaman",
        age: 81,
        likes: ["Vatten", "Treuddar", "Öl"],
    },
    {
        name: "André",
        age: 21,
        likes: ["Biljard", "Dart", "Öl"],
    }]


    return (
        <>
            <ProfileCard user={users[0]}/>
            <ProfileCard user={users[1]}/>
        </>
    )
}