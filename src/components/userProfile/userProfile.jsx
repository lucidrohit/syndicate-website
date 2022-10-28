import "./userProfile.scss";

function UserProfile({ name="Rohit Gupta", logo }) {
  return (
    <div className="userProfile sideBar__element box box--bg">
      <div className="userProfile__logo" >
        {/* <img src={logo} alt="user" /> */}
      </div>
      <div className="userProfile__details">
        <h5 className="heading__first">Username</h5>
        <div className="userProfile__details__name">{name}</div>
      </div>
    </div>
  );
}

export default UserProfile;
