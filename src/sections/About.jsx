import face from '../images/AyanImage.jpg';
import edCap from '../images/graduation-cap.png';

function About() {
    return (
        <div className="about pt-[30px]" id='aboutme'>
            <h2 className='text-4xl text-blue-800 font-extrabold'>About Me</h2>

            <div className="aboutSection w-full">
                {/* Left Section */}
                <div className="userBio w-[700px] text-left">
                    <div className="m-4 text-3xl font-semibold">Bio</div>

                    <div className="text-xl text-justify m-4">Java-based Full Stack Developer in the making, with hands-on experience in Spring Boot, React, and MySQL. Passionate about building full-stack apps that solve real problems and eager to grow with every line of code.</div>

                    <div className="flex flex-col md:flex-row items-center gap-4 m-5 w-full">
                        <div className="border-2 border-black h-auto w-full md:w-[450px] p-6 rounded-3xl bg-blue-600" style={{backgroundColor:'rgb(15, 23, 42)', color:'white', borderColor:'rgb(30 41 59)'}}>
                            <div className='flex items-center gap-5 mb-5'>
                                <img src={edCap}/>
                                <h1 className='text-2xl font-mono font-bold'>Education</h1>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
                            <p className="text-lg mb-1" style={{color:'rgb(148 163 184)'}}>Kamla Nehru Mahavidyalaya, Nagpur</p>
                            <p className="text-sm" style={{color:'rgb(148 163 184)'}}>2021 - 2024</p>
                            <p className="text-lg mb-4 italic" style={{color:'rgb(148 163 184)'}}>
                                Focused on Java Developer, DSA, Spring Boot and React Js.
                            </p>
                        </div>
                    </div>
                </div>

                {/* right section */}
                <div className="userInfo w-full p-3 flex justify-center items-center flex-col">
                    <div className="h-[160px] rounded-full border-2 border-blue-950 flex justify-center items-center mb-6 userImage">
                        <img src={face} alt="" className="h-[150px] w-[150px] rounded-full" />
                    </div>

                    <div>
                        <h3 className="text-3xl font-semibold mb-3">Ayan Ahmad Sheikh</h3>
                        <p className="text-xl mb-4 text-center">Full Stack Java Developer in Making</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {["Java", "JavaScript", "React", "DSA", "Spring Boot"].map((skill, i) => (
                                <span key={i} className="border border-black px-4 py-2 rounded-[20px] text-sm text-blue-900 cursor-pointer" style={{ backgroundColor: 'rgb(194 216 231 / 0.5)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <a href="https://drive.google.com/file/d/1KJys3RSuKcndqKC2Ty4H7QkEgSFH0my3/view?usp=drivesdk" target='_blank'>
                            <button className='border border-black bg-blue-700 text-white px-6 py-2 text-lg rounded-[30px rounded-lg m-4 hover:bg-blue-800 transition'> Download Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;