// import React, { Component } from 'react';
// import Profile from './Profile';
// class Profile extends Component {
//   state = {
//     posts: [''], 
//     messages: [''],
//     _id: '',
//     username: '',
//   }
// componentDidMount() {
//   fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me')
//     .then(response => response.json())
//     .then(user => this.setuser({ 
//       posts: user.posts, 
//       messages: user.messages,
//       _id: user._id,
//       username: user.username,
//     })
//   )
// }
// render() {
//     return (
//       <Profile {...this.state} />
//     )
//   }
// }