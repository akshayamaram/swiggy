import React from "react";

/**     --> we are learning how to use class based components here <--
 *
 * Class Based Components : Class based Component is a class which extends React.Component
 * and has a render() method which returns a piece of jsx
 */

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    /** this is how we create state varaibles in cbc */
    this.state = {
      userInfo: {
        name: "John Doe" /** setting default values in our state */,
        company: "Doe",
      },
    };
  }

  
  async componentDidMount() {               /** how we fetch apis in cbc */

    const data = await fetch(" https://api.github.com/users/akshayamaram");
    const json = await data.json();

    /** this is how we update our state variables */ 
    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  render() {
    const { name, company, avatar_url, html_url } = this.state.userInfo;

    return (
      <div className="profile-container">
        <div className="profile-card">
          <img src={avatar_url} alt="image1" className="profile-icon" />
          <div className="profile-name">{name}</div>
          <div className="profile-position">{company}</div>
          <a href={html_url} className="button">
            Connect
          </a>
        </div>
      </div>
    );
  }
}

export default UserCard;
