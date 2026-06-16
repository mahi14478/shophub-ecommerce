function Profile() {
  const userName = localStorage.getItem("userName");

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Profile</h1>
      <h3>Name: {userName}</h3>
    </div>
  );
}

export default Profile;