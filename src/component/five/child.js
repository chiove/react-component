import React from 'react';
 class Index extends React.Component {
    render() {
      const {active,onClick,children} =this.props;
      const styles = {
        color:active? 'red':''
      }
      return (
        <div>
          <h1 onClick={()=>onClick && onClick()} style={{color:styles.color}}>
            {children}
          </h1>
        </div>
      )
    }
  }

  export default Index;