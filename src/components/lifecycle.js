import React, { useEffect, useState } from "react";

export class ClassLifecycle extends React.Component {
  constructor(props) {
    console.clear();
    console.log("constructor");
    console.log(props);
    super(props);
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({
      s1: val,
    });
    console.log("work");
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      s1: props.arg,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render 1");
    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export const FuncLifecycle = (props) => {
  console.log("set state");
  const [s1, setS1] = useState(props.arg);

  const buttonHandler = () => {
    console.log("handler");
    setS1(s1 + 1);
  };

  useEffect(() => {
    console.log("effect");
  });

  console.log("render 1");
  return (
    <>
      {console.log("render 2")}
      <div>{<button onClick={buttonHandler}>Push</button>}</div>
      <div>{s1}</div>
    </>
  );
};
