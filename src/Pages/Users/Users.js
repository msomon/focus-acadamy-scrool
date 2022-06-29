import React, { useEffect, useState } from 'react';
import Use from './User';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'

const Home = () => {
const pageLimit= 8;
const totalproduct = 500;
  const [use,setUse] = useState([])
   
 const getproduct =()=>{
    
   
    let pageNo = Math.ceil (use.length / pageLimit )+1;
    console.log(pageNo);
    const url = `https://randomuser.me/api?results=${pageLimit}&page=${pageNo}`
    console.log(url);

  axios.get(url)
  .then(data=>{
    const all= data?.data.results
    const allData= [...use , ...all]
    console.log(allData);
    setUse(allData)
  })

 }


  useEffect( ()=>{
    setTimeout(async ()=>{

      getproduct()
    },1000)
   
  },[])

  const fetchMoreData=()=>{
    if(use.length < totalproduct){
      setTimeout(async ()=>{

        getproduct()
      },1000)
    }
  }
    

  return (
    <div className='lg:mx-10'>
      <InfiniteScroll
    dataLength={use.length}
    next={fetchMoreData}
    hasMore={use.length < totalproduct}
    loader={
      <h2 type="button" class="bg-green-500 text-center items-center text-2xl pb-3 ..." disabled>
  Loading...
</h2>
   }  

  >
    
    <div className='grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-5 mb-5  mt-10'>
      {
        use?.map((user , index)=><Use user={user} key={index}></Use>)
      }
      </div> 
     
     </InfiniteScroll>
    </div>
  );
};

export default Home;