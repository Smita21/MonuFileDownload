import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  downloadFile = () => {

    fetch('http://localhost:5001?file=pdf')
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'file';
          a.click();
        });
        //window.location.href = response.url;
      });
  }

  render() {
    return (
      <div id="container">
        <h1 className="text-success text-center">Download File using React App</h1>
        <button className="btn btn-primary" onClick={this.downloadFile}>Download</button>
      </div>
    )
  }

}

export default App; 