

function HideComments() {

    const Hidetext = () => {
        
        document.getElementById('target-text').innerHTML = '';
        
    }


    return(
        <main className="hidebtn-card">
            <button onClick={Hidetext} className="hidebtn">Hide Comments</button>
        <div id="target-text">
            <h2>HEADING 1</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Minus illum ipsa veniam sunt dignissimos, asperiores ipsum
                 cum quasi nisi illo provident voluptatem temporibus vel ea 
                 nihil quam in explicabo possimus?
            </p>
            <h2>HEADING 2</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Minus illum ipsa veniam sunt dignissimos, asperiores ipsum
                 cum quasi nisi illo provident voluptatem temporibus vel ea 
                 nihil quam in explicabo possimus?
            </p>
        </div>

        </main>
    )


}
export default HideComments