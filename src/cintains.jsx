import photo from "./assets/logo.jpg"
import ph from "./assets/photo.jpg"

function Contain(){
    const g=document.getElementById("game");
function Show(){
g.style.display="flex";
}

    return(
        <>
         <div className="containor">
         <div className="img">
            <img src={ph} width="50px"/>
            <p className="p-personal">
                Hello , my name is <span>NAEEM AL-HINDI</span> <br />
                wellcome to <a href="https://www.instagram.com/">my-protifolio</a> , i'm frontend developer <br />
                and studing SE
            </p>
        </div>

        <h2>lest play a simple game try to giss the number</h2>
            <button onClick={()=>Show()}>play</button>
        <div id="game">
            <div className="input-btn">
            <input type="text" />
            <button className="try-btn">try</button>
            </div>
            
            
            <class className="btns">
            <button>generate</button>
            <button>close</button>
            </class>
        </div>

        </div>
        <img className="img-animation"src={photo} />
        </>
       
    )
}

export default Contain