




function Objects(props){
    try {
            const objects = props.object
            const listcategory = props.listcategory
            const mapfruits = objects.map( fruit => <li key={fruit.name}>{fruit.name} : {fruit.calories}</li> )
            
        return(
            <>

            <h2>{listcategory}</h2>
            <ol> {mapfruits} </ol>
            </>
           
    )
    } catch (error) {
        console.log(error)   
    }
    
}

Objects.defaultProps = {
    object:"Object-name",
    listcategory: "Object-Category"
    
}

export default Objects