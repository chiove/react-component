import React from 'react';
 class Index extends React.Component {
   constructor(props){
     super(props);
    this.state={a:1}
   }
    render() {
      return (
        <div>
          我是{this.props.a.a}学生
        </div>
      )
    }
  }

  export default Index;