import React, { Fragment, useEffect, useState } from 'react';

const Listings = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [content, setContent] = useState('');

  const postMatches = (post, text) => {
    return post.author.username.toLowerCase().includes(text.toLowerCase()) || post.description.toLowerCase().includes(text.toLowerCase()) || post.price.toLowerCase().includes(text.toLowerCase());
  }

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

  const messageUser = (id) => {
    fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${id}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        message: {
          content: content,
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        alert(`Message: ${content}. Sent successfully!`);
        setContent('');
      })
      .catch(console.error);
      event.target.reset()
  }

  const getPosts = () => {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data.data.posts);
      setPosts(data.data.posts)
    })
    .catch(console.error);
  }
  useEffect(() => {
    getPosts();
  }, []);

  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return posts ? (
    <main id="listings">
      <div className="object-listings">
        <div>
          <h1>Search for listings below</h1>
          <div className="input-div">
              <form className="search-box">
              <input 
                  type="text" 
                  placeholder="Search for listings here" 
                  onChange={(event)=> {setSearchTerm(event.target.value)}}/>
              </form>
          </div>
        </div>
        <h1>{postsToDisplay.length} Listings</h1>
        <Fragment>
            {postsToDisplay ? postsToDisplay.map((post, index) => {
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
                        {post.author.username === localStorage.getItem('user') ? 
                        <Fragment>
                          <button className="edit-button" onClick={(event) => {editField(event, post._id)}}>Edit Post</button>
                          <button className="delete-button" onClick={() => {deletePost(post._id)}}>Delete Post</button>
                        </Fragment>
                         : localStorage.getItem('user') && 
                         <form onSubmit={(event)=> {event.preventDefault(), messageUser(post._id)}}>
                           <div className="container">
                            <input type="text" placeholder="Leave message here" onChange={(event) => {setContent(event.target.value)}}/>
                            <button className="message-button">
                              Message Poster
                            </button>
                          </div>
                         </form>
                          }
                    </section>
                </Fragment>
              )
            }): null}  
          </Fragment>

      </div>
    </main>
  ) : null;
}
export default Listings;