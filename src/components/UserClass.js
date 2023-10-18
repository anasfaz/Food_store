import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //   super()
   
    this.state = {
        count: 0,
        count2:1,
      };
      console.log(this.props.name,'child constructor');
    }
    componentDidMount() {
        console.log(this.props.name,' Component Did Mount');
    }
    render() {
    const { name, location } = this.props;
        const { count, count2 } = this.state;
        console.log(this.props.name,' render----');
    return (
      <div className="user-card">
            <h1>count: {count}</h1>
            <button onClick={() => {
                //never ever update state variables directly
                this.setState({
                    count:this.state.count+1
                })
            }} >count increase</button>
            <h1>count: {count2}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>contact:anas@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
