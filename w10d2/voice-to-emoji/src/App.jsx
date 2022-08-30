import "./App.css";
import * as speechCommands from "@tensorflow-models/speech-commands";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const coolLabels = ["🤢🤮🤢", "📙📚📕", "🧐👑🧐", "🐈😸🐈", "💩💩💩", "🥔🍟🥔"];

  const reportToConsole = (results) => {
    const scores = Array.from(results.scores);
    const labels = ["Arque", "Background Noise", "Dignity", "Meow", "Poop", "Potato"];
    // const scores = [
    //   0.037742529064416885, 0.034172117710113525, 0.01643037050962448, 0.024380190297961235,
    //   0.04305761680006981, 0.8442171812057495,
    // ];

    const biggestValue = Math.max(...scores);
    const biggestValueIndex = scores.indexOf(biggestValue);
    console.log(labels[biggestValueIndex]);
  };
  const updateCurrentIndex = (results) => {
    const scores = Array.from(results.scores);
    const labels = ["Arque", "Background Noise", "Dignity", "Meow", "Poop", "Potato"];
    // const scores = [
    //   0.037742529064416885, 0.034172117710113525, 0.01643037050962448, 0.024380190297961235,
    //   0.04305761680006981, 0.8442171812057495,
    // ];

    const biggestValue = Math.max(...scores);
    const biggestValueIndex = scores.indexOf(biggestValue);
    biggestValueIndex !== 1 && setCurrentIndex(biggestValueIndex);
  };

  const createModel = async () => {
    const URL = "https://interesting-knife.surge.sh/model/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  };
  const listenOptions = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  const listen = async (options, listenCallback) => {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    console.log(classLabels);
    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    recognizer.listen(listenCallback, options);

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
  };

  return (
    <div className="App">
      <header>
        <h1>Super voice to emoji 💩</h1>
      </header>
      <h1 style={{ fontSize: "8em", textAlign: "center" }}>{coolLabels[currentIndex]}</h1>
      <button onClick={() => listen(listenOptions, updateCurrentIndex)}>listen!</button>
    </div>
  );
}

export default App;
