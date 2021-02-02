import React from 'react';


const Home = (props) => {
const {search, setSearch} = props;
return (
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
)
}

export default Home;