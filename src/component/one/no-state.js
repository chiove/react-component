import React from 'react';
 class Index extends React.Component {
    render() {
      return (
        <div>
          <div>
              {this.props.text.map((item,index)=>(
                <img key={index} src={item.url} alt="" style={{width:120,height:100}}/>
              ))}
          </div>

        </div>
      )
    }
  }

  export default Index;