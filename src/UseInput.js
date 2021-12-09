

const UseInput = (initialValue) => {

    const [value, setValue] = useState(initialValue, validator);
  
    const onChange = (event) => {
      
      console.log(event.target);
      let willUpdate = true;
  
      if(typeof validator === "function") {
        willUpdate = validator(value);
      }
  
      if(willUpdate) {
        setValue(event.target.value);
      }
  
    }
  
    return {value, onChange};
  
  }

  export default UseInput;