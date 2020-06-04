import React from "react";
import "./styles.css";

import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    fetch("https://www.hatchways.io/api/assessment/students")
      .then((response) => response.json())
      .then((responseData) =>
        this.setState({ students: responseData.students })
      );
  }

  render() {
    return (
      <div className="App">
        <CardList students={this.state.students} />
      </div>
    );
  }
}

export default App;
