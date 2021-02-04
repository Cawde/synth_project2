import React, { Fragment } from 'react';
// import { getToken } from "../auth";


const Home = (props) => {
    const {search, setSearch} = props;
    let description = '';
    let price = 0;
    let title = '';
    const createPost = (event) => {
        event.preventDefault();
        try {
            fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        // willDeliver: false
                    }
                })
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Fragment>
            <div>
                <h1>Search for listings below</h1>
                <div className="input-div">
                    <form className="search-box">
                    <input 
                        type="text" 
                        placeholder="Search for listings here" 
                        onChange={(event)=> {setSearch(event.target.value)}}/>
                    </form>
                </div>
            </div>
            {localStorage.getItem('token') ? 
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
            : <h1>Log in to make a post</h1>}
        </Fragment>
    )
}

export default Home;