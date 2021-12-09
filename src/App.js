import React, { useEffect, useState } from "react";

const useInput = (initialValue, validator) => {

  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    
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


const content = [
  {
      tab: "Section 1",
      content: "I'am the content of the Section 1" 
  } ,
  
  {
      tab: "Section 2",
      content: "I'am the content of the Section 2" 
  }
]

// useTabs
const useTabs = (initialTab, allTabs) => {

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if(!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}


const App = () => {

  const maxLength = value => !value.includes("@");

  const [item, setItem] = useState(0);
  const [number, setNumber] = useState(0);

  // useInput
  const name = useInput("Mr.", maxLength);

  // useTabs
  const {currentItem, changeItem} = useTabs(0, content);

  const incrementItem = () => {
    setItem(item + 1);
  }

  const decrementNumber = () => {
    setNumber(number - 1);
  }

  const sayHello = () => {
    console.log("Say Hello!");
  }

  // useEffect
  useEffect(() => {
    sayHello();
  }, [number]);

  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>{item}</button>
      <button onClick={decrementNumber}>{number}</button>
      <hr />
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      <hr />
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
      <div>
        {currentItem.content}
      </div>
    </div>
  );

}


export default App;
