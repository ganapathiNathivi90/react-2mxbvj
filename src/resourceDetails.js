import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const resourceDetails = () => {
  const { id } = useParams();
  const [name, setName] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [color, setColor] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://reqres.in/api/unknown/ ${id}`);
      const data = await response.json();
      const commonVar = data.data;
      setName(commonVar.name);
      setYear(commonVar.year);
      setColor(commonVar.color);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row col-10 m-auto ">
          <div className="col-sm-4 my-sm-5" key={id}>
            <div
              className="card"
              style={{ backgroundColor: color, height: '320px' }}
            >
              <div className="px-2 py-5 m-auto text-center">
                <h6 className="card-title fw-bolder">{name}</h6>
                <p className="card-text fs-3 fw-bolder">{year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default resourceDetails;
