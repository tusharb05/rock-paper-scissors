import React, {useEffect} from 'react';


function Display({compChoice, userChoice, computer, setComputer}) {
    useEffect(()=>{
        if(userChoice=='') return ''
        setComputer(compChoice())
    }, [userChoice])
    return (
        <div className="display">
            <h3>Your Choice: {userChoice}</h3>
            <h3>Computer's choice: {computer}</h3>
        </div>
    )
}

export default Display
