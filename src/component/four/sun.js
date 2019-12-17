import React from 'react';
import TestContext from './createContext';
const TestConsumer = TestContext.Consumer;

 class Index extends React.Component {
    render() {
      return (
        <div>
          <TestConsumer>
            {value=> {
              console.log(value)
              return <h1 style={{color:value.textColor}}>22222</h1>
            }}
          </TestConsumer>
        </div>
      )
    }
  }

  export default Index;