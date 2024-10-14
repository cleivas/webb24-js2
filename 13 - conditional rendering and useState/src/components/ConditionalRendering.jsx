import { Error } from "./Error.jsx"
import { Loading } from "./Loading.jsx"
import { Result } from "./Result.jsx"

export function ConditionalRendering(){
    const status = 'loading';
    const isNew = false;

    return (
        <>
            {status == 'loading' && <Loading/>}
            {status == 'error' && <Error/>}
            {status == 'result' && <Result/>}

            {isNew ? <p>NEW</p> : <p>OLD</p> }
        </>
    )
}