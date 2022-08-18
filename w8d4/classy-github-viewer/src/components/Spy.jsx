import { Component } from "react";

export default class Spy extends Component {
  constructor(props) {
    super(props);

    // Equivalent in hooks is useState hook
    this.state = {
      x: 0,
      y: 0,
    };
  }

  report = (event) => {
    // console.log("Clicked at: ", event.clientX, event.clientY);

    this.setState({ x: event.clientX, y: event.clientY });
  };

  // useEffect(() => {
  // return () => ...
  // }, [])
  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  // useEffect(() => {
  //   document.addEventListener("click", this.report);

  //   return () => document.removeEventListener("click", this.report);
  // })

  componentDidUpdate(oldProps, oldState) {
    // console.log(oldProps, oldState);
    if (oldState.x !== this.state.x || oldState.y !== this.state.y) {
      console.log("Clicked at: ", this.state.x, this.state.y);
    }
  }

  render() {
    return <h1>🕵️</h1>;
  }
}
