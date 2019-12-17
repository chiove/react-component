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
      const component = React.Children.map(children,(item,index)=>{
        if (item.type) {
          return React.cloneElement(item, {
            active: this.state.activeIndex === index,
            onClick: () => this.setState({activeIndex: index})
          });
        } else {
          return item;
        }
      })
      return (
        <div>
          {component}
        </div>
      )
    }
  }

  export default Index;