import React, { useState, Fragment, useEffect } from 'react';

const Profile = (props) => {
  const [messages, setMessages] = useState([]);
  const {posts, setPosts} = props;
  const deletePost = (post_id) => {
    fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${post_id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => response.json())
      .then(result => {
        console.log(post_id);
        console.log(result);
        alert('Post successfully deleted!');
        getPosts();
      }).catch(console.error);
  }

  const getPosts = () => {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      }).then(response => response.json())
      .then(data => {
        setMessages(data.data.messages.filter(message=> message.fromUser.username !== localStorage.getItem('user'))); 
        setPosts(data.data.posts.filter(post => post.active));
        console.log(messages, posts);
      })
      .catch(console.error);
  }
  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Welcome {localStorage.getItem('user')}!</h1>
      <div>
      {messages.length ? <h3>Here's all of your messages</h3> : <h3>Your messages will be here when you get them!</h3>}
        <Fragment>
            {messages ? messages.map((message, index) => {
              return (
                <Fragment key={index} >
                  <header>
                    <h3>From: {message.fromUser.username}</h3>
                    
                  </header>
                  <section className="details">
                    <p>Post: {message.post.title}</p>
                    <span className="title"><p className="content">{message.content ? message.content : ''}</p></span>
                  </section>
                </Fragment>
              )
            }): <h3>Your messages will be here when you get them!</h3>}  
          </Fragment>
      </div>
      <div>
      <h1>You have {posts.length} posts</h1>
        <Fragment>
            {posts ? posts.map((post, index) => {
              return (
                <Fragment key={index} >
                  <header>
                      <h3>{post.title}</h3>
                      <h4>Post Date: {post.createdAt}</h4>
                  </header>
                  <section className="details" value={post._id}>
                      <span className="title">{post.description ? 'Description:' : ''}<p className="content">{post.description ? post.description : ''}</p></span>
                      <span className="title">{post.author.username ? "Seller:" : ''}<p className="content">{post.author.username ? post.author.username : ''}</p></span>  
                      <span className="title">{post.location ? "Location:" : ''}<p className="content">{post.location ? post.location : ''}</p></span>
                      <span className="title">{post.price ? "Price:" : ''}<p className="content price">{post.price ? post.price : ''}</p></span>
                      <span className="title">{post.updatedAt ? "Updated At:" : ''}<p className="content">{post.updatedAt ? post.updatedAt : ''}</p></span>
                      <span className="title">{post.willDeliver ? "Will Deliver:" : ''}<p className="content">{post.willDeliver ? post.willDeliver : ''}</p></span>
                      <button className="edit-button">Edit Post</button>
                      <button className="delete-button" onClick={() => { deletePost(post._id) }}>Delete Post</button>
                  </section>
                </Fragment>
              )
            }): <h3>You have no posts</h3>}  
          </Fragment>
      </div>
    </div>
  )
}

export default Profile;