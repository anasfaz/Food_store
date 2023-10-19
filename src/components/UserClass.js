import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //   super()

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log(this.props.name, "child constructor");
    }
    // https://api.github.com/users/USERNAME
async  componentDidMount() {
    console.log(this.props.name, " Component Did Mount");
    const data = await fetch('https://api.github.com/users/akshaymarch7')
    const json = await data.json()
    console.log(json, 'dataUser');
    
    this.setState({
        userInfo:json
    })
    }

  render() {
    const { name, location,avatar_url } = this.state.userInfo;
  
    console.log(this.props.name, " render----");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>contact:anas@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
