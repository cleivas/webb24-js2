import { Welcome } from "./Welcome"
import { Likes } from "./Likes"

export function ProfileCard({user}){
    console.log(user)

    return(
        <div>
            <Welcome name={user.name} age={user.age}/>
            <Likes likes={user.likes}/>
        </div>
    )
}