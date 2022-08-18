import { Component } from "react";

// export default function RepoForm(props) {
//   return (
//     <form autoComplete="off">
//       <input type="text" name="owner" placeholder="Enter owner" />
//       <input type="text" name="repo" placeholder="Enter repo" />
//       <button>Fetch commits</button>
//     </form>
//   );
// }

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { owner: "", repo: "" };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter owner"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter repo"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}
