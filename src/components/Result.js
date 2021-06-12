import React from 'react'

function Result({user, comp}) {
    // console.log(user)
    // console.log(comp)
    const checkWin = () => {
        if(user === comp && user!==''){
            return <h2>Its a tie!</h2>
        }else if(user==='Rock' && comp==='Paper'){
            return <h2>Computer Won</h2>
        }else if(user==='Rock' && comp==='Scissor'){
            return <h2>You Won!</h2>
        }else if(user==='Paper' && comp==='Rock'){
            return <h2>You Won</h2>
        }else if(user==='Paper' && comp==='Scissor'){
            return <h2>Computer Won</h2>
        }else if(user==='Scissor' && comp==='Rock'){
            return <h2>Computer crushed you with Rock!</h2>
        }else if(user==='Scissor' && comp==='Paper'){
            return <h2>You Won!</h2>
        }else {
            return;
        }
    }
    return (
        <div className="result">
            {checkWin()}
        </div>
    )
}

export default Result
