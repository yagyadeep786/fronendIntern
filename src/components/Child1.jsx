import React from 'react';

const Child1 = ({setMoney}) => {
    return (
        <div>
            <button onClick={()=>setMoney((pre)=> pre+1000)}>Child1</button>
        </div>
    );
}

export default Child1;
