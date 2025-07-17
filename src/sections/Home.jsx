import { Link } from 'react-scroll';
import githubIcon from '../images/GithubIcon.png';
import linkeinIcon from "../images/linkedinIcon.png"
import gmailIcon from "../images/gmailIcon.png";
import openBracket from "../images/open-bracket.png";
import closeBracket from "../images/close-bracket.png";


function Home() {
    return (
        <div className='home pt-[100px]' id='house'>
            <div className="userDetail">
                <div className='userName'>
                    <span id='hello' >Hello I`m</span>
                    <h2>Ayan Ahmad Sheikh</h2>
                </div>
                <div id='bio' >Full-Stack Developer in the Making | React & Java Enthusiast & Passionate Learner</div>
                <p className='bios'>A passionate Full-Stack Developer in the making, turning ideas into responsive React interfaces and robust Java backends via Spring Boot.</p>

                <div className="socialLink">
                    <div id="btnBox">
                        <button className="btn"><Link to="projects" smooth={true} duration={500}>View Projects</Link></button>
                        <button className="btn"><Link to="contact" smooth={true} duration={500}>Contact Me</Link></button>
                    </div>

                    <div id="link">
                        <a href="https://github.com/Ayan-Ahmad-Sheikh" target='-blank'><img src={githubIcon} /></a>
                        <a href="https://www.linkedin.com/in/ayan-ahmad-sheikh" target='-blank'><img src={linkeinIcon} /></a>
                        <a href="mailto:ayansheikh.ind@gmail.com?subject=Hello Ayan&body=I saw your portfolio and..."><img src={gmailIcon} /></a>
                    </div>
                </div>
            </div>

            <div className="relative max-w-[650px] mx-auto">
                <div className="relative bg-[#252327] border border-gray-700 p-6 rounded-3xl shadow-md font-mono text-sm text-white">

                    <div className="flex justify-between items-center mb-6">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-400">developer.json</div>
                    </div>

                    <div className="userJson flex flex-col items-start gap-2 text-white text-[16px] leading-7">
                        <img src={openBracket} alt="{" className="h-5 w-5 filter invert brightness-125" />
                        <code className="pl-6">
                            <span><span className="text-purple-400">"name"</span> : <span className="text-green-400">"Ayan Ahmad Sheikh"</span>,</span>
                            <span><span className="text-purple-400">"stack"</span> : <span className="text-orange-400">["React", "Java", "Spring Boot"]</span>,</span>
                            <span><span className="text-purple-400">"focus"</span> : <span className="text-green-400">"Full-Stack Java Development"</span>,</span>
                            <span><span className="text-purple-400">"status"</span> : <span className="text-green-400">"Learning & Building"</span></span>
                        </code>
                        <img src={closeBracket} alt="}" className="h-5 w-5 filter invert brightness-125 self-start" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;