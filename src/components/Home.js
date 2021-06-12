import React, {useState} from 'react';
import Display from './Display';
import Option from './Option';
import Result from './Result';

function Home({opt1, opt2, opt3}) {
    const [userChoice, setUserChoice] = useState('');
    const [computer, setComputer] = useState('');

    const compChoiceNumber = () => {
        return Math.floor(Math.random()*3) + 1
        //1=rock, 2=paper, 3=scissor
    }
    const generateComputerChoice = () => {
        let a = compChoiceNumber()
        switch(a){
            case 1:
                return 'Rock';
                break;
            case 2:
                return 'Paper';
                break;
            case 3:
                return 'Scissor';
                break;
            default:
                return 'Retry :(';
                break;
        }
    }
    return (
        <div>
            <h1 className="heading">Rock, Paper, Scissors!</h1>
            <Display compChoice={generateComputerChoice} userChoice={userChoice} computer={computer} setComputer={setComputer}/>
            <Option setChoice={setUserChoice} rockOption={opt1} paperOption={opt2} scissorOption={opt3}/>
            <Result user={userChoice} comp={computer}/>
        </div>
    )
}

export default Home
