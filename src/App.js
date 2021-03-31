import React from "react";
import "./App.css";
import sop_test_210218 from "./sop_test_210218.xlsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadEmployeeData = () => {
    fetch(sop_test_210218).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "sop_test_210218.xlsx";
        a.click();
      });
      //window.location.href = response.url;
    });
  };

  render() {
    return (
      <div id="container">
        <h1>Download File using React App</h1>
        <h3>Download sop Data using Button</h3>
        <button onClick={this.downloadEmployeeData}>Download</button>
        <p />
        <h3>Download sop Data using Link</h3>
        <a href="#" onClick={this.downloadEmployeeData}>
          Download
        </a>
        {/* <h3>Download sop Data using Link</h3>
        <div>
          <a href={sop_test_210218} download="sop_test_210218.xlsx">
            Download Here
          </a>
        </div> */}
      </div>
    );
  }
}

export default App;
