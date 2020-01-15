import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>HELLO WORLD, brought to you by localhost + React. (Just checking...)</div>
        <form action="" method="post">
          <textarea id="" name=""
              rows="10" cols="75" placeholder="Enter stuff here.">
          </textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App;

