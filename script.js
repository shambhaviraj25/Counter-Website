const countValue=document.querySelector('#counter');

const increment = () =>{
    //get the value from UI and we will get the value as string, So we have convert the value into integer.
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};

const decrement = () =>{
    //get the value from UI and we will get the value as string, So we have convert the value into integer.
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value - 1;
    //set the value onto UI
    countValue.innerText = value;
};