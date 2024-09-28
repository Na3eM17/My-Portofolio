import { useState } from "react";
import photo from "./assets/logo2.jpg"
import ph from "./assets/photo.jpg"
import pic1 from "./assets/project.png"
import pic2 from "./assets/project2.png"
import pic3 from "./assets/project3.png"
import pic4 from "./assets/project4.png"
import pic5 from "./assets/project5.png"
import pic6 from "./assets/firstproject.png"
import pic7 from "./assets/reactprojrct.png"




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
         <div id="containor">
         <div className="img" >
            <img src={ph} width="50px" />
            <p className="p-personal">
                Hello , my name is <span>NAEEM AL-HINDI</span> <br />
                wellcome to <a href="http://myportofolio-self-five.vercel.app">my-protifolio</a> , i'm frontend developer <br />
                and studing SE
            </p>
        </div>

        {games? (
                    <div id="play">
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
                <div className="view" >
                    <div className="project" >
                    <a href="https://na3em17.github.io/Fech-Project/"><img src={pic1} /></a>
                    <p>
                            fech api project <br />by using githup <br />
                            <a href="https://na3em17.github.io/Fech-Project/">visit project</a>
                        </p>
                    </div>
                    
                     <div className="project2"  >
                        <a href="https://na3em17.github.io/project_2/"><img src={pic2} /></a>
                        <p>
                            project 1 <br />fully responsive <br />
                            <a href="https://na3em17.github.io/project_2/">visit project</a>
                        </p>
                    </div>
                    <div className="project" >
                        <a href="https://na3em17.github.io/project_4/"><img src={pic3} /></a>
                        <p> 
                            project 2 <br />fully responsive <br />
                            <a href="https://na3em17.github.io/project_4/">visit project</a>
                        </p>
                    </div>
                    <div className="project2" >
                        <a href="https://na3em17.github.io/project_6/"><img src={pic4} /></a>
                        <p>
                            project 3 <br />fully responsive <br />
                            <a href="https://na3em17.github.io/project_6/">visit project</a>
                        </p>
                    </div>
                    <div className="project" >
                        <a href="https://na3em17.github.io/project7/"><img src={pic5} /></a>
                        <p>
                            project 4 <br />fully responsive <br />
                            <a href="https://na3em17.github.io/project7/">visit project</a>
                        </p>
                    </div>
                    <div className="project2">
                        <a href="https://na3em17.github.io/first_project/"><img src={pic6} /></a>
                        <p>
                            my first project <br />fully responsive <br />
                            <a href="https://na3em17.github.io/first_project/">visit project</a>
                        </p>
                    </div>
                    <div className="project" >
                        <a href="https://passwordgenerator-pearl-mu.vercel.app/"><img src={pic7} /></a>
                    	<p>
                            first project with react <br />
                            <a href="https://passwordgenerator-pearl-mu.vercel.app/">visit project</a>
                        </p>
                    </div>
                </div>

        </div>
        <img className="img-animation"src={photo} />
        </>
       
    )
}

export default Contain