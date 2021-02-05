import React, { useState, Fragment, useEffect } from 'react';

const Profile = (props) => {
  const [messages, setMessages] = useState('');
  const {listings, setListings} = props;
  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      }).then(response => response.json())
      .then(data => {
        setMessages(data.messages);
        setListings(data.posts);
        console.log(localStorage.getItem('token'))
        console.log(messages, listings);
      })
      .catch(console.error);
  }, [setMessages, setListings]);

  return (
    <div>
      <h3>Welcome {localStorage.getItem('user')}!</h3>
      <div>
        <Fragment>
            {messages ? <h3>Here's all of your messages</h3> && messages.map((message, index) => {
              return (
                <Fragment key={index} >
                  <header>
                      <h3>From: {message.fromUser.username}</h3>
                  </header>
                    <section className="details">
                        <span className="title">{message.content ? 'Content:' : ''}<p className="content">{message.content ? message.content : ''}</p></span>
                    </section>
                </Fragment>
              )
            }): <h3>Messages will be here when you get them</h3>}  
          </Fragment>
      </div>
      <div>
        <Fragment>
            {listings ? <h3>Here's all of your posts</h3> && listings.map((listing, index) => {
              return (
                <Fragment key={index} >
                  <header>
                      <h3>{listing.title}</h3>
                      <h4>Post Date: {listing.createdAt}</h4>
                  </header>
                    <section className="details" value={listing._id}>
                        <span className="title">{listing.description ? 'Description:' : ''}<p className="content">{listing.description ? listing.description : ''}</p></span>
                        <span className="title">{listing.author.username ? "Seller:" : ''}<p className="content">{listing.author.username ? listing.author.username : ''}</p></span>  
                        <span className="title">{listing.location ? "Location:" : ''}</span>
                        <span className="title">{listing.price ? "Price:" : ''}<p className="content price">{listing.price ? listing.price : ''}</p></span>
                        <span className="title">{listing.updatedAt ? "Updated At:" : ''}<p className="content">{listing.updatedAt ? listing.updatedAt : ''}</p></span>
                        <span className="title">{listing.willDeliver ? "Will Deliver:" : ''}<p className="content">{listing.willDeliver ? listing.willDeliver : ''}</p></span>
                        {listing.author.username === localStorage.getItem('user') ? 
                        <Fragment>
                          <button className="edit-button">Edit Post</button>
                          <button className="delete-button" onClick={(event) => { event.preventDefault(); deletePost(event.target.value) }}>Delete Post</button>
                        </Fragment>
                         : null}
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