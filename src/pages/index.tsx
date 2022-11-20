import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { useUser } from "~/hooks/useUser";
import { MembershipMetadata } from "~/types";
import bgWelcome from '../assets/bg-welcome.png';
import bgProfile from '../assets/bg-profile.png';
import bgTablet from "../assets/bg-tablet.png"
import bgDesktop from '../assets/bg-desktop.png'
import logo from '../assets/white-logo.png';
import rightArrow from '../assets/right-arrow.png';
import Akcela from '../assets/akcela.jpeg'
import TechEd from '../assets/teched.jpeg'
import Nordev from '../assets/nordev.jpeg'
import Polygon from '../assets/polygon.jpeg'
import Stc from '../assets/syncthecity2022.jpeg'
import blueTick from '../assets/blue-tick.png';
import { useState } from "react";


  const Home: NextPage = () => {
    const { logoutUser, user } = useUser();
    const { data } =
      useSWR<{ memberships: MembershipMetadata[] }>("/api/memberships");

      const [NFTs, SetNFTs]=useState([
        {
          id:1,
          name:"Sync the City 2022",
          image:Stc.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:2,
          name:"Tech Educators",
          image:TechEd.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:3,
          name:"Akcela",
          image:Akcela.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:4,
          name:"Norfolk Developers",
          image:Nordev.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        {
          id:5,
          name:"Polygon",
          image:Polygon.src,
          year:2022,
          issuer:"XXXX",
          type:1
        }  ,
        ])
        // max-w-screen-md px-6 pt-24 mx-auto h-screen

    if (!user?.isLoggedIn) {
      return (
        <div style={{backgroundImage:`url(${bgDesktop.src})`}} className="">
          <img className="logo" src={logo.src}></img>
          <div className="welcome-text-container">
           <h1 className="welcome-text">Welcome to TrustM3,</h1>
          <p className="welcome-text2">Verification on demand.</p>
        </div>
          <Link href="/api/login" className="blur-card">
          </Link>
          <Link href="/api/login" className="connect-cv-header">Connect Wallet</Link>
        </div>
      );
    }
    return (
      <div style={{backgroundImage:`url(${bgProfile.src})`, backgroundSize:"cover", height:800}} className="max-w-screen-md px-6 pt-24 mx-auto">
      <img className="logo-profile" src={logo.src}></img>
          <div className="flex justify-end">
            <div className="logout-div">
          <img className="logout-icon" src={rightArrow.src}></img>
          <label className="logout-text" onClick={() => logoutUser()}>Logout</label>
          </div>
          </div>
          
      <p className="profile-title">Welcome to your wallet, User</p>
      <div className="profile-gotocv-div"></div>
      <Link href="/CV">
        <label className="profile-gotocv-text">Go to CV</label>
        <img className="profile-gotocv-icon" src={rightArrow.src}></img>
      </Link>
      <div className="profile-menu-btn-section flex justify-around flex-1">
        <a href="javascript:void(0)" className="text-white active">All</a>
        <a href="javascript:void(0)" className="text-white">Jobs</a>
        <a href="javascript:void(0)" className="text-white">Education</a>
        <a href="javascript:void(0)" className="text-white">Skills</a>
      </div>
      <div className="job-description-btn-section text-white">
        <input className="job-search-input px-2" placeholder="Search..">
        </input>
        <div className="flex flex-row flex-wrap gap-2" >
               {NFTs.map((nft)=>{
        return(
          <Link href={"/JobDetails?id="+nft.id} key={nft.id}>
            <div className="nft-box mt-4">
              <label className="nft-year pt-2 pb-4">{nft.year}</label>
              <img src={nft.image} className="nft-img"></img>
              <div className="nft-description-box mt-3">
                <img src={blueTick.src} className="nft-tick"></img>
                <label className="nft-description mt-2">{nft.name}</label>
              </div>
            </div>
            </Link>)
        })}
        </div>
      </div>
      </div>
    );
  };

  export default Home;