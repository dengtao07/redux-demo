import React from "react";
import Store from "./Store/index";
import { addTotoItem } from "./Store/actions/addTodoItem";
import { changeInput } from "./Store/actions/changeInput";
import CompA from "./components/comA";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    console.log(this.state);
  }

  static subscriber = null;
  r;

  componentDidMount() {
    this.subscriber = Store.subscribe(() => {
      this.setState(Store.getState());
    });
  }

  componentWillUnmount() {
    this.subscriber();
  }

  onChange = (e) => {
    Store.dispatch(changeInput(e.target.value));
  };

  onEnter = (e) => {
    if (e.keyCode === 13) {
      Store.dispatch(addTotoItem(this.state.inputVal));
      Store.dispatch(changeInput(""));
    }
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputVal}
          onChange={this.onChange}
          onKeyDown={this.onEnter}
        />
        <ul>
          {this?.state?.list?.map((item, index) => {
            return <li key={`${index}-${item}`}>{item}</li>;
          })}
        </ul>
        <CompA />
      </div>
    );
  }
}

export default App;
