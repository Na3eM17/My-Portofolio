import { useState } from "react";
import photo from "./assets/logo.jpg"
import ph from "./assets/photo.jpg"

function Contain(){
    const [games,setGame]=useState(true);
    const[Num,setNum]=useState(Math.floor(Math.random()*100)+1);
    const[inputValue,setInputValue]=useState("");
    const [res , setRes]=useState("");
    const[time, settime]=useState(0);

    
    const Show = () =>{
    setGame(false);
}


function genrate(){
    const newNumber=Math.floor(Math.random()*100)+1;
    setNum(newNumber);
    console.log("number is ",newNumber);
    setRes("")
    settime(0)
}


const tryGuess = () => {

    const guess = Number(inputValue);
    console.log(guess);
    if (guess === Num) {
        setRes("🥳winner in")
        settime(time)
        console.log("You got it!");
    } else if(guess>Num) {
        console.log("Try again.");
        setRes("try somthing less");
    } else if(guess<Num) {
        console.log("Try again.");
        setRes("try somthing large");
    }else{
        setRes("please enter num")
        settime(0);
    }
    settime(time+1)
};

const Close =() =>{
    setGame(true)
    setRes("")
    settime(0)
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

        {games? (
                    <div id="n">
                        <h2>Press play to show the guessing number game</h2>
                        <button onClick={Show}>Play</button>
                    </div>
                ) : (
                    <div id="game">
                        <h1>welcome to gues the number game</h1><br />
                        <h1>press generate</h1>
                        <div className="input-btn">
                            <input id="inpt" 
                            value={inputValue} 
                            type="text" 
                            placeholder="enter number....."
                            onChange={(e) => setInputValue(e.target.value)}
                             />

                            <button  onClick={tryGuess} className="try-btn">Try</button>
                        </div>
                        <h1>{res} <br />times: {time} </h1>
                        <div className="btns">
                            <button onClick={()=>genrate()}>Generate</button>
                            <button onClick={Close}>Close</button>
                        </div>
                    </div>
                )}
                <div className="projects">
                    <div className="project">
                        <img src="" />
                        <p>

                        </p>
                    </div>
                    
                     <div className="project">
                        <img src="" />
                        <p>
                            
                        </p>
                    </div>
                    <div className="project">
                        <img src="" />
                        <p>
                            
                        </p>
                    </div>
                    <div className="project">
                        <img src="" />
                        <p>
                            
                        </p>
                    </div>
                    <div className="project">
                        <img src="" />
                        <p>
                            
                        </p>
                    </div>
                    <div className="project">
                        <img src="" />
                        <p>
                            
                        </p>
                    </div>
                    <div className="project">
                        <img src="" />
                        <p>
                            
                        </p>
                    </div>
                </div>

        </div>
        <img className="img-animation"src={photo} />
        </>
       
    )
}

export default Contain