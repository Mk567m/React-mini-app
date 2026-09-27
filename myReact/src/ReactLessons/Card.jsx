function Card() {
    const imageurl = './src/assets/jinx.jpg'
    const PicEvent = (event) =>{
        console.log('event')
        event.target.style.display = 'none';
    }
    return(
        
        <div className='titlecard'>       
            <img onClick={(event) => PicEvent(event)} className='image' src={imageurl} alt="Profile Picture" />
            <h2 className='title'>Mustafa khan</h2>
            <p className='about'>I am an Intermediate Web developer. I love Video Games.</p>
        </div>

        



    )
}
export default Card