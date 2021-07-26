import React from 'react';

const MyComponent = props => {

    const onClickHandler = (e, value) => {
        alert("asdasd");
    }
    const onClic = (e, value) => {
        alert("asdasd");
    }
    const onClick = (e, value) => {
        alert("asdasd");
    }

        
        return(
            <>
            <button onClick={onClickHandler}> Tab 1</button>
            <button onClick={onClic}> Tab 2</button>
            <button onClick={onClick}> Tab 3</button>
            </>
            
        );
    
}


export default MyComponent;
