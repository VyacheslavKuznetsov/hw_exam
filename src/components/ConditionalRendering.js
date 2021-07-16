import React, { Fragment } from "react";

const Tab1 = () => {
  return <h1>Text of tab1</h1>;
};

const Tab2 = () => {
  return <h1>Text of tab2</h1>;
};

const Tab3 = () => {
  return <h1>Text of tab3</h1>;
};

export class ConditionalRendering extends React.Component {
  state = {
    activeTab: 1,
  };

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute("data-name"),
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Fragment>
        <button data-name={1} onClick={this.handleTab}>
          Tab1
        </button>
        <button data-name={2} onClick={this.handleTab}>
          Tab2
        </button>
        <button data-name={3} onClick={this.handleTab}>
          Tab3
        </button>
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        <div>
          {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
      </Fragment>
    );
  }
}
