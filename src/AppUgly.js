import React from "react";

/* 
hook이 없었던 시절에는, state를 사용하기 위해서
반드시 class 형태로 만들어야 했다!
*/
class AppUgly extends React.Component {
  
    state = {
      item: 1
    }

    render() {
        
        const {item} = this.state;
      
        return (
            <div>
                <h1>Hello {item}</h1>
                <button onClick={this.incrementItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
            </div>
        );
  }

    incrementItem = () => {
        this.setState(state => {
            return {
                item: state.item + 1
            };
        });
    }

    decrementItem = () => {
        this.setState(state => {
            return {
                item: state.item - 1
            };
        });
    }


}

export default AppUgly;