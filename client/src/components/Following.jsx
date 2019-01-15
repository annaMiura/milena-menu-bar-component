import React from 'react';
import { Follower } from './Follower.jsx'

// class Following extends React.Component {
//   render() {

//     return (
//       <div style={styles.position}>

//       <h2>   .</h2>

//       This is the Following </div>
//     )
//   }
// }

const Following = (props) => {
  console.log('💬', props.userArray)
  // const mapThroughUsers =
  return (
    <div>
      {props.userArray.map((user, index) => {
    return <Follower userData={user} key={index} />;
  })}
    </div>
  )
}

const styles = {};

styles.position = {
  position: "absolute",
  top: "25px",
  left: "260px"
}


export default Following;