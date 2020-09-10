import React, {useEffect,useState} from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./Firebase"

function App() {
  const [reels, setReels] = useState([]);

  useEffect(()=>{

    //App Component will run Once when it loads(from db collection take the reels snapshot it using Onsnapshot function and create a new doc and map it to the properties )
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc=>doc.data()))

    ))
  }, [])


  return (
    /**BEM naming convention */
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
          alt=""
        />

        {/**text which says reels */}
        <h1> Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map (({channel,avatarSrc,song,url,likes,shares}) =>(
        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}
        />
        ))}
      </div>
    </div>
  );
        
}

export default App;
