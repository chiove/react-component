import React from 'react';
 class Index extends React.Component {
   constructor(props){
      super(props);
      this.state={
        activeIndex:0
      }
   }

    render() {
      const {children} = this.props;
      // const component = React.Children.map(children,(item,index)=>{
      //   console.log(item);
      // })
      console.log(React.Children.map)
       const component = children.map((item,index) => {
        console.log(item);
        return item
      })
      return (
        <div>
        {component}
        </div>
      )
    }
  }

  export default Index;