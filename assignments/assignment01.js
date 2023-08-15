function sum() {
    let input1 = document.querySelector("#nameInput1").value;
    let input2 = document.querySelector("#nameInput2").value;
  
    console.log(input1);
    console.log(input2);
  
    let label = document.querySelector(`#result`);
    
    label.textContent += ((+input1) + (+input2));
  
    console.log(label.textContent);
  
  
  }