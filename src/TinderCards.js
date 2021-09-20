import React from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    //   setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  const data = [
    {
      id: 1,
      name: "Elon Musk",
      image:
        "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/screenshot_2019-10-29_at_10.44.17_am.png",
    },
    {
      id: 2,
      name: "Jeff Bezos",
      image:
        "https://oracleoftime.com/wp-content/uploads/2018/05/Jeff-Bezos.jpg",
    },
    {
      id: 3,
      name: "Muhammed Omar",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Omid Armin",
      image:
        "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Jeff Bezos",
      image:
        "https://content.fortune.com/wp-content/uploads/2020/01/GettyImages-962142720.jpg",
    },
    {
      id: 6,
      name: "Mark Zuckerberg",
      image:
        "https://oracleoftime.com/wp-content/uploads/2018/05/Jeff-Bezos.jpg",
    },
    {
      id: 7,
      name: "Lionel Messi",
      image:
        "https://www.fcbarcelonanoticias.com/uploads/s1/28/52/07/messi-recupera-lesion-barcelona-285207.jpeg",
    },
    {
      id: 8,
      name: "Juno Jo",
      image:
        "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      name: "Asa",
      image: "https://www.nigeriafilms.com/nfc-image/Asa-Looks-Gorgeous-I.jpg",
    },
    {
      id: 10,
      name: "Beutiful Nubia",
      image:
        "https://afropop.org/migrated-uploads/2017/03/BeautifulNubia-3-2-678x1024.jpg",
    },
    {
      id: 11,
      name: "Idris Elba",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FPYMBMTUyktNuRHhyvN6jdBt7RGuJlnsH6tdkl7uRhOc6-0pncdPV0RE7auMFy-J-os&usqp=CAU",
    },
    {
      id: 12,
      name: "Kareem Benzema",
      image:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/10/06/16020178070464.jpg",
    },
    {
      id: 13,
      name: "Tonia",
      image:
        "https://images.pexels.com/photos/1165999/pexels-photo-1165999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {data.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.image})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
