import React, { Fragment } from 'react';
import { useEffect } from 'react';

const Listings = (props) => {
  const {listings, setListings} = props;
  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
      setListings(data.data.posts)
      console.log(data.data.posts);
    })
  }, [])

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
                      <Fragment>
                        <span className="title">{listing.description ? 'Description:' : ''}<p className="content">{listing.description ? listing.description : ''}</p></span>
                      </Fragment>
                      <Fragment>
                        <span className="title">{listing.author.username ? "Seller:" : ''}<p className="content">{listing.author.username ? listing.author.username : ''}</p></span>  
                      </Fragment>
                      <Fragment>
                        <span className="title">{listing.location ? "Location:" : ''}</span>
                      </Fragment>
                      <Fragment>
                        <span className="title">{listing.price ? "Price:" : ''}<p className="content price">{listing.price ? listing.price : ''}</p></span>
                      </Fragment>
                      <Fragment>
                        <span className="title">{listing.updatedAt ? "Updated At:" : ''}<p className="content">{listing.updatedAt ? listing.updatedAt : ''}</p></span>
                      </Fragment>
                      <Fragment>
                        <span className="title">{listing.willDeliver ? "Will Deliver:" : ''}<p className="content">{listing.willDeliver ? listing.willDeliver : ''}</p></span>
                      </Fragment>
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