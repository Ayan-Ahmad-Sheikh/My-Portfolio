import githubIcon from '../images/GithubIcon.png';
import gmailIcon from '../images/gmailIcon.png';
import linkedInIcon from '../images/linkedinIcon.png';
import gfgIcon from '../images/gfg.jpg';

function Contact() {
    return (
        <section className="h-auto w-full flex justify-center items-center flex-col p-10 md:h-[450px]">
            <h1 className="text-4xl text-blue-800 font-extrabold sm:text-[30px] m-10">Contact & Profiles</h1>
            <h2 className="text-[20px] text-start mb-10">Looking for opportunities to collaborate and build real-world experience</h2>

            <div className="glass-box h-auto w-full grid grid-cols-1 md:grid-cols-2 md:h-[250px] gap-5" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
                <a href="mailto:ayansheikh.ind@gmail.com">
                    <div className="glass-box flex justify-start items-center gap-4 h-[70px] p-3 text-[18px] w-full overflow-hidden">
                        <img src={gmailIcon} alt="" className='h-[40px] w-[40px] flex-shrink-0' />
                        <p className='small460'>ayansheikh.ind@gmail.com</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ayan-ahmad-sheikh" target='_blank'>
                    <div className="glass-box flex justify-start items-center gap-4 h-[70px] p-3 text-[20px]">
                        <img src={linkedInIcon} alt="" className='h-[40px] w-[40px]' />
                        <p>LinkedIn</p>
                    </div>
                </a>
                <a href="https://github.com/Ayan-Ahmad-Sheikh" target='_blank'>
                    <div className="glass-box flex justify-start items-center gap-4 h-[70px] p-3 text-[20px]">
                        <img src={githubIcon} alt="" className='h-[40px] w-[40px]' />
                        <p>Github</p>
                    </div>
                </a>
                <a href="https://www.geeksforgeeks.org/user/ayansheikh/" target='_blank'>
                    <div className="glass-box flex justify-start items-center gap-4 h-[70px] p-3 text-[20px]">
                        <img src={gfgIcon} alt="" className='h-[40px] w-[40px] rounded-[50%] invert' />
                        <p>GFG Profile</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Contact;