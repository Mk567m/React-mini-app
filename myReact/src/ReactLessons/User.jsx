

function User(props){

    const success = <h3>Salaam {props.username}</h3>
    const failure = <h3>Try again, Login to Continue</h3>

    return(

        props.isloggedIn? success: failure

        
    )
}
export default User

