import React, { Fragment } from 'react';
import { useEffect } from 'react';

const Listings = (props) => {
  const {listings, setListings} = props;
  // const {author, createdAt, description, isAuthor, location, messages, price, title, updatedAt, willDeliver} = props.data.posts;
  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
      setListings(data.posts)
      console.log(data);
    })
  }, [])

  return (
    <div className="Listings">
      <h1>Listings</h1>
      {/* <header>
          <h3>{title}</h3>
          <h4>{dated}</h4>
      </header>
        <section className="facts">
          <Fragment>
            <span className="title">{title ? 'Title' : ''}</span>
            <span className="content">{title ? title : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{description ? 'Description' : ''}</span>
            <span className="content">{description ? description : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{author ? "Author" : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{createdAt ? "Time posted" : ''}</span>
            <span className="content">{createdAt ? createdAt : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{location ? "Location" : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{price ? "Price" : ''}</span>
            <span className="content">{price ? price : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{updatedAt ? "Updated At" : ''}</span>
            <span className="content">{updatedAt ? updatedAt : ''}</span>
          </Fragment>
          <Fragment>
            <span className="title">{willDeliver ? "willDeliver" : ''}</span>
            <span className="content">{willDeliver ? willDeliver : ''}</span>
          </Fragment>
        </section> */}
    </div>
  )
}
export default Listings;