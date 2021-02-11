import React, { useState, useEffect } from "react";
import Axios from "axios";

function Facultymembers() {
  const [teachers, setteachers] = useState([]);

  const fetchteachers = async () => {
    const { data } = await Axios.get(
      "https://60238a7b6bf3e6001766b33f.mockapi.io/iictteachersinfo"
    );
    const teachers = data;
    setteachers(teachers);
    console.log(teachers);
  };

  useEffect(() => {
    fetchteachers();
  }, []);

  return (
    <div>

<div className="main-box">
      <div className="big-circle">
        <div className="small-circle"></div>
      </div>
      <h2 className="heading-name">John Doe</h2>
      <h3 className="heading-work">Web Developer</h3>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nemo
        sunt quae dolorem atque deserunt non 
      </p>
      <a href="#" className="follow_btn">Follow</a>
    </div>

        

       {teachers.map((product) => (
        <p key={product.userId}>{product.name}</p>
      ))} 
    </div>
  );
}

export default Facultymembers;
