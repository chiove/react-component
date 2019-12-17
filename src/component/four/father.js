import React from 'react';
import Page from './child';
import TestContext from './createContext';
const TestProvider = TestContext.Provider;
 class Index extends React.Component {
    render() {
      return (
        <div>
          <TestProvider value={{textColor: 'pink'}}>
            <Page/>
          </TestProvider>
        </div>
      )
    }
  }

  export default Index;