import React, { useState } from "react";
import "./styles/Search.css";

function Search ({baseApiUrl,setApiUrl}) {
  const [queries, setQueries] = useState({
    name: '',
    gender: '',
    status: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(queries).some(q => q.length > 0)) {
      const query = Object.keys(queries).reduce(
        (acc, curr, i, arr) => {
          if (queries[curr]) {
            acc += `${curr}=${queries[curr]}&`;
          }
          if (!arr[i + 1]) {
            acc = acc.substr(0, acc.length - 1);
          }
          return acc;
        }, "");
      setApiUrl(`${baseApiUrl}?${query}`);
    } else {
      setApiUrl(baseApiUrl);
    } 
  };

  const handleChange = (e) => {
    setQueries({ ...queries, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <label htmlFor='gender'>Search a Character</label>
      <input className="search-input" name="name" type="text" value={queries.name} onChange={handleChange}/>
      <label htmlFor='gender'>Gender :</label>
      <select className="search-select" name="gender" value={queries.gender} onChange={handleChange}>
        <option value="">All Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <label htmlFor='status'>Status :</label>
      <select className="search-select" name="status" value={queries.status} onChange={handleChange}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <input className="search-button" type="submit" value="Search" placeholder="Search"/>
    </form>
  );
}

export default Search;