import React from 'react';
import ContentLoader from 'react-content-loader'
const User = ({user}) => {
  // console.log(user);
  const {email,picture ,phone,id,gender} = user

  return (
    <div>
      
{
  user && <>
   <div className=" card w-full h-[400px] shadow-2xl bg-accent">
      
   <figure className="px-10 pt-10">
        <img src={picture.large} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {id?.name}</h2>
        <h2 className="card-title">Gender: {gender}</h2>
        <h2 className="card-title">Email: {email}</h2>
        <p>Phone: {phone}</p>
       
      </div>
      
    </div></>
}


    </div>
   
  );
};

export default User;