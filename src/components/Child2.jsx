import React from 'react';

const Child2 = ({setMoney}) => {
    return (
        <div>
            <button onClick={()=>setMoney((pre)=> pre-500)}>Child2</button>
        </div>
    );
}

export default Child2;