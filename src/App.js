import { Fragment, useState, useReducer } from "react";
import Card from "./components/Card";
import uniqid from "uniqid";

const App = () => {
  const [images, setImages] = useState([
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xxrDSl4iIoOae4fhdxAzCAHaGt%26pid%3DApi&f=1",
      name: "Spongebob",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.giantbomb.com%2Fuploads%2Foriginal%2F2%2F23921%2F828695-grppic_2104324_patrickstarfanclub.gif&f=1&nofb=1",
      name: "Patrick",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZS7GeGFFreX5bbDBtn4gHAHaK5%26pid%3DApi&f=1",
      name: "Sandy",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-qTH-ogHdxHKxED6pBUe6AHaHa%26pid%3DApi&f=1",
      name: "Jimmy",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x0RsMqq-iKBDwE9bQIGcBgHaKq%26pid%3DApi&f=1",
      name: "Sonic",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsickr.files.wordpress.com%2F2014%2F07%2Fpikachu_sit.png%3Fw%3D1200&f=1&nofb=1",
      name: "Pikachu",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20110728124217%2Fnintendo%2Fen%2Fimages%2Fe%2Fe3%2FSquirtle.png&f=1&nofb=1",
      name: "Squirtle",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3HW5a0FBwKD10mWLCE4XCwHaIC%26pid%3DApi&f=1",
      name: "Charmander",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.l2q0uZ89kOwYVOd4t1IimAAAAA%26pid%3DApi&f=1",
      name: "Gintoki",
      selected: false,
    },
    {
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0jUzbiTVkFhqC9KE6xmb8QAAAA%26pid%3DApi&f=1",
      name: "Shinpachi",
      selected: false,
    },
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [test, setTest] = useState(1);

  const reorder = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const reducer = (state, action) => {
    switch (action.type) {
    }
  };

  const makeGuess = (name) => {
    console.log(name);
    // look for the item within state
    const correspondingImage = images.find((image) => image.name === name);
    if (correspondingImage.selected) {
      // truthy, means choosen before
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      // reset all images

      let newArray = images.map((image) =>
        image.selected === true ? { ...image, selected: false } : image
      );

      reorder(newArray);
      setImages(newArray);
    } else {
      setImages();

      let newArray = images.map((image) =>
        image.name !== name
          ? image
          : image.selected === false
          ? { ...image, selected: true }
          : image
      );

      reorder(newArray);
      setImages(newArray);
      setCurrentScore(currentScore + 1);
    }
  };

  const display = (
    <Fragment>
      <h1>Memory Card Game</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <h4>Current Score = {currentScore}</h4>
      <small> High Score = {highScore}</small>

      <div className="card-wrapper">
        {images.map((image) => (
          <Card makeGuess={makeGuess} key={uniqid()} image={image} />
        ))}
      </div>
      <button onClick={() => console.log(test)}>Check</button>
    </Fragment>
  );
  return display;
};

export default App;
