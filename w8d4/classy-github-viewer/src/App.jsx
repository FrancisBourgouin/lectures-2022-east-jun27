import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";
import Spy from "./components/Spy";
import axios from "axios";
import { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <RepoForm />
//       <CommitList />
//     </div>
//   );
// }

// https://api.github.com/repos/FrancisBourgouin/iceberg/commits

class App extends Component {
  constructor() {
    super();
    this.state = {
      commitData: undefined,
      spyFound: false,
    };
  }

  fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios.get(url).then((res) => this.setState({ ...this.state, commitData: res.data }));
  };

  render() {
    const { commitData, spyFound } = this.state;

    return (
      <div className="App">
        <Header />
        <RepoForm onSubmit={this.fetchCommits} />
        {commitData && <CommitList commitData={commitData} />}
        {!spyFound && <Spy />}
      </div>
    );
  }
}

export default App;
