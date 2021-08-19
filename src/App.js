import "./styles.css";
import { useState } from "react";
const travelDatabase = {
  Beaches: [
    {
      name: "Coromandel Coast",
      description:
        "Really this beautiful place has us wondering if it's actually God's own country",
      rating: "4/5"
    },
    {
      name: "Juhu",
      description: "Really the atmosphere aorund this beach speaks for itself",
      rating: "3.5/5"
    },
    {
      name: "Mangalore",
      description: "Feel the peace, breeze and waves , nothing else",
      rating: "4/5"
    }
  ],
  Mountains: [
    {
      name: "Kedarnath",
      description:
        "A trek of 22 KMS will take you this majestic place , to the doorway of heaven itself",
      rating: "5/5"
    },
    {
      name: "Tungnath",
      description:
        "Lesser known , more peaceful and arguably one of the most beautiful natural scenery is preserved here",
      rating: "4.5/5"
    },
    {
      name: "Shimla",
      description: "A well - known hilly tourist destination",
      rating: "5/5"
    }
  ],
  Safari: [
    {
      name: "Jim Corbett",
      description:
        "a true Tiger gallore , giving close insight to the national animal",
      rating: "3.5/5"
    },
    {
      name: "Chilika",
      description: "A sanctuary for all the birds that arrive here in winters ",
      rating: "5/5"
    },
    {
      name: "Manas",
      description: "Calmness and peace surround this grassland safari",
      rating: "3.5/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Beaches");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  function toggleDark() {
    var btnToggle = document.querySelector("#toggler");
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      btnToggle.innerText = "☀️";
    } else {
      document.body.classList.add("dark-mode");
      btnToggle.innerText = "🌙";
    }
  }
  return (
    <div className="App">
      <div style={{ textAlign: "right" }}>
        <button
          style={{ fontSize: "larger", border: "none" }}
          id="toggler"
          onClick={toggleDark}
        >
          ☀️
        </button>
      </div>
      <h1>
        {" "}
        <span>✈️</span> Travelogue
      </h1>
      <p>
        Travelogue is your go to guide for best tourist destinations across
        India!
      </p>
      <div>
        {Object.keys(travelDatabase).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDatabase[selectedGenre].map((book) => (
            <li key={book.name}>
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "medium" }}> {book.description} </div>
              <div style={{ fontSize: "smaller" }}>
                <span>⭐</span> {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
