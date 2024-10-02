export function Welcome({name, age}){
    // console.log(name, age)


    return (
        <div>
            <h1>Welcome, {name}!</h1>
            <p>You are {age*12} months old.</p>
        </div>
    )
}

// const obj = {
//     ett: 1,
//     b: 'beeeee'
// }
// const {ett, c} = obj;
// console.log(ett, c)