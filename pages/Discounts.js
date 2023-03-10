import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisscountsAds from "./components/DisscountsAds";
import DiscountCards from "./components/DiscountCards";
import { useState, useEffect } from "react";
import axios from "axios";

const Discounts = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://arcane-reaches-19838.herokuapp.com/api/offers").then((response)=>{
      setData(response.data.data)
      arr.push(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

  const [ad, setAd] = useState([]);

  useEffect(() => {
    axios
      .get("https://arcane-reaches-19838.herokuapp.com/api/ads")
      .then((response) => {
        setAd(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-screen font-blinker">
      <Header />
      <div className="w-full h-full pt-[100px]">
        <h1 className="p-10 pb-1 text-3xl font-bold uppercase lg:text-5xl">
          Deals & Offers
        </h1>

        <hr className="mx-10" />
        <hr className="mx-10 " />

        <div className="gap-5 p-10 lg:flex">
          <div className="lg:w-[80%] ">
            <DiscountCards data={data} />
          </div>
          <div className="w-[20%] h-full lg:ml-20 mt-10 lg:mt-0 hidden lg:block">
            <DisscountsAds ad={ad} />
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default Discounts;
