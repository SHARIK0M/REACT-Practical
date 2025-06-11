
function User1(props){

    return <h2>Hello {props.name} {props.age}</h2>
}


function User2({name,age}){

    return <h2>Hello {name} {age}</h2>
}

export default User1 ;