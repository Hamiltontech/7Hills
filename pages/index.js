import Header from "./components/Header";
import MainHero from "./components/MainHero";
import Trending from "./components/Trending";
import TopArticlesAds from "./components/TopArticlesAds";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import Link from "next/link";
import TopQuizzes from "./components/TopQuizzes";
import TopChannel from "./components/TopChannel";
import TopChannelAds from "./components/TopChannelAds";
import Footer from "./components/Footer";
import { useEffect, useState, useRef } from "react";
import LatestArticles from './components/LatestArticles'
import axios from "axios";


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://arcane-reaches-19838.herokuapp.com/api/articles").then((response)=>{
      setData(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])



  return (
    <div>
      <title>7Hills</title>

{/* <div className="w-full bg-blackk h-20 text-white font-extrabold flex text-center justify-center pt-5">
        Powered by  <span className="mr-3 mt-1 ml-1">
          <img src="https://www.hst.jo/web/image/website/1/logo/Hamilton%20Smart%20Engineering?unique=33375f1" width={100} height={100}/>
        </span>
        <span className="uppercase "> / Website is under review / </span>
      </div> */}
      <Header />
      
      <MainHero data={data}/>

      {/* Home page main section */}
      <div className="h-screen max-w-full pt-2 text-white bg-red font-blinker">
        <div className="w-full p-10 bg-blackk">
          <Trending data ={data}/>
          <div ><TopArticlesAds/></div>
          
          {/* quizzes section */}

        <div className="w-full bg-blackk p-2 pb-10">
        <iframe style={{"border-radius":"12px"}} src="https://open.spotify.com/embed/album/0JGOiO34nwfUdDrD612dOp?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>

          <div className="flex mt-10  lg:mt-0">
            <h1 className="text-2xl font-extrabold text-white uppercase lg:text-5xl">
              Top Quizzes
            </h1>
          </div>
          <hr />
          <div className="h-[500px] align-middle overflow-hidden mt-5">
            <TopQuizzes />
          </div>

          {/* channel videos section */}
          {/* <TopChannel /> */}

          {/* Latest articles section */}
          <div id="latest">
            <LatestArticles data={data}/>
            </div>
          {/* add section */}
          <TopChannelAds />
          {/* footer section */}
        </div>

        <Footer />
      </div>
    </div>
  );

}


