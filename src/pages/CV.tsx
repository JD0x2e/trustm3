import {NextPage} from 'next'
import bgWelcome from '../assets/bgCv1.png';
import rightArrow from '../assets/right-arrow.png';
import { useUser } from "~/hooks/useUser";
import Link from "next/link";
import abrsm from '../assets/abrsm.png'
import dog from '../assets/dog.png'
import dressage from '../assets/dressage.png'
import f1 from '../assets/f1.png'
import figma from '../assets/figma.png'
import foolproof from '../assets/foolproof.png'
import gymnastics from '../assets/gymnastics.png'
import nua from '../assets/nua.png'
import python from '../assets/oython.png'
import ucas from '../assets/ucas.png'
import portrait from '../assets/person.png'
import share from '../assets/share.png'




const CV:NextPage = () => {
    const { logoutUser, user } = useUser();

    return(
        <div style={{backgroundImage:`url(${bgWelcome.src})`, height: "1250px"}} className="max-w-screen-md px-6 pt-99 mx-auto ">
            <div className='cv-logo-arrow'>
                <img src={portrait.src} className='my-cv-logo'></img>
                 <Link href='/'>
                <img className="return-arrow" src={rightArrow.src}></img>
                </Link>
            </div>
          <div className='cv-content'>
            <div className='my-cv-title-container'>
                <h1 className="my-cv-title">My CV</h1>
                <img className='my-cv-title-logo' src={share.src}></img>
            </div>
            <p className='my-cv-description'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ad quis molestiae eligendi, sunt aliquam nesciunt possimus amet exercitationem eos non.
            </p>
            <div className='cv-work-exp-container'>
                <h2 className='cv-work-experience'>Work Experience</h2>
                <div className='cv-backcard'>
                    <div className='img-container'>
                        <img className='img-work-exp' src={dog.src}></img>
                        <img className='img-work-exp' src={foolproof.src}></img>
                        <img className='img-work-exp' src={f1.src}></img>
                    </div>
                    <div className='desc-container'>
                        <p>2021 - Senior UX Designer, Borrow My Doggy</p>
                        <p>2018-2021 - Assistant UX Designer, Foolproof</p>
                        <p>2016-2018 - Intern, F1</p>
                    </div>
                </div>
            </div>
            <div className='cv-jobskills-container'>
                <h2 className='cv-work-experience'>Job Skills</h2>
                <div className='cv-backcard'>
                    <div className='img-container2'>
                        <img className='img-jobskills' src={python.src}></img>
                        <img className='img-jobskills' src={figma.src}></img>
                        <img className='img-jobskills' src={""}></img>
                    </div>
                    <div className='desc-container'>
                        <p>2019 - Python course with CodeAcademy</p>
                        <p>2017 - Official Figma web designer</p>
                    </div>
                </div>
            </div>
            <div className='cv-jobskills-container'>
                <h2 className='cv-work-experience'>Education</h2>
                <div className='cv-backcard'>
                    <div className='img-container2'>
                        <img className='img-jobskills' src={ucas.src}></img>
                        <img className='img-jobskills' src={nua.src}></img>
                        <img className='img-jobskills' src={""}></img>
                    </div>
                    <div className='desc-container'>
                        <p>2013 - A-Levels, 3x A*s</p>
                        <p>2016 - First class degree BA Design at NUA</p>
                    </div>
                </div>
            </div>
            <div className='cv-jobskills-container'>
                <h2 className='cv-work-experience'>Hobbies</h2>
                <div className='cv-backcard'>
                    <div className='img-container2'>
                        <img className='img-jobskills' src={abrsm.src}></img>
                        <img className='img-jobskills' src={gymnastics.src}></img>
                        <img className='img-jobskills' src={dressage.src}></img>
                    </div>
                    <div className='desc-container'>
                        <p>2015 - Grade 5 Piano</p>
                        <p>2014 - Artistic Gymnastics England floor champion</p>
                        <p>2015 - British Dressage Novice Regional champion </p>
                    </div>
                </div>
            </div>
            
          </div>

        </div>
    )
}

export default CV;