import React from 'react';


export const Follower = (props) => {
  console.log('🙏', props);
  return (
   <div>
      <div> <img src={props.userData.logo}/></div>
      <div> <h5>{props.userData.display_name}</h5></div>
    </div>
  );
}


const styles = {};

styles.follower = {
  width: "500px",
  height: "250px",
  color: "red",
  borderRadius: "5px",
  border: "1px"
}

styles.image = {
    width: "25%",
    borderRadius: "4px"
}


export default Follower;