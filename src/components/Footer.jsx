import githubIcon from '../images/GithubIcon.png';
import gmailIcon from '../images/gmailIcon.png';
import linkedInIcon from '../images/linkedinIcon.png';
import gfgIcon from '../images/gfg.jpg';

function Footer() {
    return (
        <footer className='h-auto w-full flex justify-center items-center gap-10 sm:gap-15 mt-14 p-5' style={{ backgroundColor: 'rgb(11 21 35)', color: 'white' }}>
            <div className='h-auto w-full sm:w-[55%] flex justify-center items-start flex-col sm:ml-5 gap-4 text-[1.25rem]'>
                <h1 className='text-[20px] font-bold'>AS.</h1>
                <p className='h-auto text-justify'>Learning by building — focused on clarity, creativity and code</p>
            </div>
            <div className='flex justify-center items-start sm:items-end flex-col gap-5 w-full sm:w-[45%] text-[1.25rem]'>
                <div className='flex justify-center items-center gap-3'>
                    <a href="https://github.com/Ayan-Ahmad-Sheikh" target='_blank'>
                        <img src={githubIcon} alt="" className='h-[40px] w-[40px]' />
                    </a>
                    <a href="mailto:ayansheikh.ind@gmail.com">
                        <img src={gmailIcon} alt="" className='h-[40px] w-[40px]' />
                    </a>
                    <a href="https://www.linkedin.com/in/ayan-ahmad-sheikh" target='_blank'>
                        <img src={linkedInIcon} alt="" className='h-[40px] w-[40px]' />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/ayansheikh/" target='_blank'>
                        <img src={gfgIcon} alt="" className='h-[40px] w-[40px] invert rounded-[50%]' />
                    </a>
                </div>
                <p className='text-justify h-auto w-auto'>CopyRight© 2025 Ayan Ahmad Sheikh | Built with React and Tailwind</p>
            </div>
        </footer>
    )
}

export default Footer;