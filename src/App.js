import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import CardList from "./components/card-list/card-list.component";

import { fetchStudentsArray } from "./redux/students/students.actions";

class App extends React.Component {
  componentDidMount() {
    const { fetchStudentsArray } = this.props;
    fetch("https://www.hatchways.io/api/assessment/students")
      .then((response) => response.json())
      .then((responseData) => fetchStudentsArray(responseData.students));
  }

  render() {
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStudentsArray: (students) => dispatch(fetchStudentsArray(students)),
});

export default connect(null, mapDispatchToProps)(App);
