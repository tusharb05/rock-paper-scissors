import React from 'react'

function Option({setChoice, rockOption, paperOption, scissorOption}) {

    return (
        <div className="options">
            <div className="a" onClick={()=>setChoice('Rock')}>
                <img src="https://lh3.googleusercontent.com/proxy/F110gsdrb5_-V0uPKtaughATFILYR3wBwAIeyrE6FXnPC65rLeQApdSOa572WtXGZWb79JVergEA9wGjUFtxw8qd" className="rock" alt="" ref={rockOption}/>
            </div>
            <div className="a" onClick={()=>setChoice('Paper')}>
                <img src="http://www.clker.com/cliparts/5/6/2/0/1194984467464538364carta_architetto_frances_01.svg.med.png" alt="" className="paper" ref={paperOption}/>
            </div>
            <div className="a" onClick={()=>setChoice('Scissor')}>
                <img src="https://lh3.googleusercontent.com/proxy/M2WIgmV7aagqWtenYSQX3BXe2vvnZbeuQKd1Dtgf1kjeP3njar5EqkLoZ0SariQt3hPZJbe-5pE_OfZXuMTQ5ZOG3Lg5i1U" alt="" className="scissor" ref={scissorOption}/>
            </div>
        </div>
    )
}

export default Option
