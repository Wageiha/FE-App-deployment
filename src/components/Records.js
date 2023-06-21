import React, { useState, useEffect } from "react";
import axios from "axios";

const Records = ({ records, getRecords }) => {
  useEffect(() => {
    getRecords();
  }, []);

  console.log(records.data);
  return (
    <div className="App" style={{display:"flex"}}>
      {records?.data?.map((record) => {
        return (
          <div style={{border:"solid 2px white", padding:"10px", margin:"5px"}}>
            {record.title} <br />
            {record.artist} <br />
            {record.year} <br />
            {record.img} <br />
            {record.price}
          </div>
        );
      })}
    </div>
  );
};

export default Records;
