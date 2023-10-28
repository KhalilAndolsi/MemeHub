import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const showCards = data.map((d, i) => <Card title={d.name} id={i} key={i} img={d.url} />);

  function searchMeme() {
    const showCardsOfSearch = data.map((d, i) => `${d.name}`.toUpperCase().indexOf(search) !== -1 ? <Card title={d.name} id={i} key={i} img={d.url} /> : undefined)
    return showCardsOfSearch
  }
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes));
  }, []);
// tyrtyrytry
  return (
    <div className="container">
      <h1 className="mainTitle">Meme<span>Hub</span></h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) =>
          setSearch(e.target.value.toUpperCase())
        }
      />
      <div className="cards">{search === "" ? showCards : searchMeme()}</div>
    </div>
  );
}

export default App;
