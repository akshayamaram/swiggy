import UserCard from "./UserCard";


const About = () => {
  return (
    <div className="about-container">
      <h1>TEAM</h1>
      <div className="user-container">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default About;