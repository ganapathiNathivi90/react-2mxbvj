import React, { Component } from 'react';
import axios from 'axios';
// import feed from '../feed.json';

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
  state = {
    resource: [],
  };
  componentDidMount() {
    axios.get(`https://reqres.in/api/unknown`).then((res) => {
      const resource = res.data.data;
      this.setState({ resource });
    });
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          posts: resource,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
