import React from 'react';
import NoState from './no-state';
import axios from 'axios';

class Index extends React.Component {
    state = {
      list:[]
    }
    componentDidMount() {

      axios.get('http://localhost:4000/https://api.mlwei.com/wallpaper/api/?cid=new&start=0&count=3').then(res => {
          if(res.data){
            console.log(res)
            this.setState({
              list:res.data.data
            })
          }
        })
    }

    render() {
      return (
        <div>
          <NoState text={this.state.list}/>
        </div>
      )
    }
  }

  export default Index;