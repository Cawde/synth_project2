import React, { Fragment } from 'react';
import { useEffect } from 'react';

const Listings = (props) => {
  const {listings, setListings, user_id, setUserId} = props;
  // const [postID, setPostID] = useState('');
  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
      setListings(data.data.posts)
      console.log(data.data.posts);
    })
  }, [])

  const editField = (event) => {
    event.preventDefault();
    return (
      <form className="input-box" onSubmit={createPost}>
        <h3>Make a post</h3>
        <div className="container">
          <label><b>Name of Item</b></label>
          <input 
              type="text" 
              
              placeholder="Enter the name of your item."
              onChange={(event)=> {title = event.target.value}}
              />
          <label><b>Description</b></label>
          <input 
              type="text" 
              
              placeholder="Enter the description of your item."
              onChange={(event)=> {description = event.target.value}}
              />
              <label><b>Price</b></label>
          <input 
              type="number" 
              
              placeholder="Enter the price of your item."
              onChange={(event)=> {price = event.target.value}}
              />
              <button
                  type="submit" 
                  className="registerbtn" 
                  >Submit Post
              </button>
        </div>
      </form>
    )
  }

  // const editPost = (event, post_id) => {
  //   event.preventDefault();
  //   try {
  //     fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${post_id}`, {
  //       method: "PATCH",
  //       headers: {
  //         'Content-Type' : 'application/json',
  //         'Authorization' : `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         post: {
  //           title:'',
  //           description: '',
  //           price: ''
  //         }
  //       })
  //     }).then(response => response.json())
  //       .then(result => {
  //         console.log(result);
  //       })
  //   } catch (err) {
  //       console.error(err);
  //   }
  // }

  // const deletePost = (props) => {
  //   const {user_id, token} = props
  //   try {
  //     fetch(`https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/${user_id}`, {
  //       method: "DELETE",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       }
  //     }).then(response => response.json())
  //       .then(result => {
  //         console.log(result);
  //       })
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return listings ? (
    <main id="listings">
      <div className="object-listings">
        <h1>Listings</h1>
        <Fragment>
            {listings ? listings.map((listing, index) => {
              return (
                <Fragment key={index}>
                  <header>
                      <h3>{listing.title}</h3>
                      <h4>Post Date: {listing.createdAt}</h4>
                  </header>
                    <section className="details">
                        <span className="title">{listing.description ? 'Description:' : ''}<p className="content">{listing.description ? listing.description : ''}</p></span>
                        <span className="title">{listing.author.username ? "Seller:" : ''}<p className="content">{listing.author.username ? listing.author.username : ''}</p></span>  
                        <span className="title">{listing.location ? "Location:" : ''}</span>
                        <span className="title">{listing.price ? "Price:" : ''}<p className="content price">{listing.price ? listing.price : ''}</p></span>
                        <span className="title">{listing.updatedAt ? "Updated At:" : ''}<p className="content">{listing.updatedAt ? listing.updatedAt : ''}</p></span>
                        <span className="title">{listing.willDeliver ? "Will Deliver:" : ''}<p className="content">{listing.willDeliver ? listing.willDeliver : ''}</p></span>
                      <button>Message Poster</button>
                      {/* <button onClick={}>Edit Post</button> */}
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