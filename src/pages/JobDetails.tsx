import type { NextPage } from "next";
import bgjobDetails from '../assets/bg-jobdetails.png';
import Stc from '../assets/syncthecity2022.jpeg';
import TechEd from '../assets/teched.jpeg';
import Akcela from '../assets/akcela.jpeg';
import Nordev from '../assets/nordev.jpeg';
import Polygon from '../assets/polygon.jpeg';
import tick from '../assets/tick.png';
import rightArrow from '../assets/right-arrow.png';
import logo from '../assets/white-logo.png';
import Pen from '../assets/pen.png';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";


const JobDetails: NextPage = () => {
    const [NFTs, SetNFTs]=useState([
        {
          id:1,
          name:"Sync the City 2022",
          image:Stc.src,
          year:2022,
          issuer:"XXXX",
          type:1,
          description:{
            name:"Notes",
            notes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, nulla porro totam quibusdam distinctio beatae architecto ipsa quisquam, ratione dolorem animi quidem unde repellat quis vero. Blanditiis dolore in temporibus!"
          }
        }  ,
        {
          id:2,
          name:"Tech Educators",
          image:TechEd.src,
          year:2022,
          issuer:"XXXX",
          type:1,
          description:{
            name:"Notes",
            notes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, nulla porro totam quibusdam distinctio beatae architecto ipsa quisquam, ratione dolorem animi quidem unde repellat quis vero. Blanditiis dolore in temporibus!"
          }
        }  ,
        {
          id:3,
          name:"Akcela",
          image:Akcela.src,
          year:2022,
          issuer:"XXXX",
          type:1,
          description:{
            name:"Notes",
            notes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, nulla porro totam quibusdam distinctio beatae architecto ipsa quisquam, ratione dolorem animi quidem unde repellat quis vero. Blanditiis dolore in temporibus!"
          }
        }  ,
        {
          id:4,
          name:"Norfolk Developers",
          image:Nordev.src,
          year:2022,
          issuer:"XXXX",
          type:1,
          description:{
            name:"Notes",
            notes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, nulla porro totam quibusdam distinctio beatae architecto ipsa quisquam, ratione dolorem animi quidem unde repellat quis vero. Blanditiis dolore in temporibus!"
          }
        }  ,
        {
          id:5,
          name:"Polygon",
          image:Polygon.src,
          year:2022,
          issuer:"XXXX",
          type:1,
          description:{
            name:"Notes",
            notes:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, nulla porro totam quibusdam distinctio beatae architecto ipsa quisquam, ratione dolorem animi quidem unde repellat quis vero. Blanditiis dolore in temporibus!"
          }
        }  ,
        ])
    
        const router=useRouter();
    const [NFT, setNFT] = useState({
        id:-1,
        name:"",
        image:"",
        year:2022,
        issuer:"",
        type:-1,
        description:{
          name:"",
          notes:""
        }
    });
    useEffect(()=>{
        var id  = parseInt(router.query.id?.toString()??"0");
        var _nft=NFTs.filter(x=>x.id==id);
        if(_nft.length>0){
            setNFT(_nft[0])
        }
    }, [router.query.id])
    return (    
        <div style={{backgroundImage:`url(${bgjobDetails.src})`, height: 750, backgroundSize:"cover"}} className="max-w-screen-md px-6 pt-8 mx-auto">
            <div className="JobDetail-header-section flex flex-row items-center">
                <div className="flex-1">
                    <Link href="/">
            <img className="back-arrow h-6 w-10" src={rightArrow.src}></img>
            </Link>
            </div>
                <div className="flex-1">
                <img className=" h-12 w-12 mx-auto" src={logo.src}></img>
                </div>
                <div className="flex-1"></div>
        </div>
        <div className="JobDescription-card">
        <img src={NFT.image} className="nft-image-lg"></img>
        <div className="flex flex-col mx-6">
            <div className="flex flex-row items-end" >
        <label className="JobDescription-text mt-6">{NFT.name}</label>
        <img className="h-6 w-6" src={tick.src}></img>
        </div>
        <label className="text-white font-bold mt-2">{NFT.year}</label>
        <label className="text-white font-bold">Issued by {NFT.issuer}</label>
        </div>
        </div>
        <div className="JobDetail-bottom-section">
        <div className="JobDescription-card2 flex flex-row justify-end">
        <label className="JobDescription-text3 flex-1 outline-none">{NFT.description.name}</label>
        <img src = {Pen.src} className="h-6 w-6 self-center mr-6"></img>
        </div>
        <div className="mt-6 mx-5" style={{lineHeight: "17px", fontSize: "13px"}}>
        <label className="text-white font-medium" >
        {NFT.description.notes}
        </label></div>
        </div>
      </div>
    );
};
export default JobDetails;