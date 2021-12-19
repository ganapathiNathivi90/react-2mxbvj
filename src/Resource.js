import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class Resource extends React.Component {
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
    const all = {
      color: '#000',
      textDecoration: 'none',
      padding: '10px',
      fontFamily: 'Arial',
    };
    return (
      <div className="container">
        <div className="row col-10 m-auto ">
          {this.state.resource.map((person) => (
            <div className="col-sm-4 col-xs-6 col-12 my-sm-5" key={person.id}>
              <Link style={all} to={`/resource/${person.id}`}>
                <div className="card" style={{ backgroundColor: person.color }}>
                  <div className="card-body px-2 py-5 m-auto text-center">
                    <h6 className="card-title fw-bolder">{person.name}</h6>
                    <p className="card-text fs-3 fw-bolder">{person.year}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
