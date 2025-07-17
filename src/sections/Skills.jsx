import code from '../images/code.png';
import frontendImg from '../images/frontend.png';
import backend from '../images/backend.png';
import tools from '../images/tools.png'

function Skills() {
    return (
        <section className="h-auto md:h-[700px] w-full flex justify-center items-center flex-col p-10">
            <h1 className="text-4xl text-blue-800 font-extrabold m-10">Skills</h1>
            <p className="text-[20px] text-start mb-10">I`ve explored different areas of web development — including frontend, backend, and database — to understand how everything works together.</p>

            <div className="h-auto md:h-[400px] max-w-[1400px] w-full grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="border border-black rounded-2xl flex flex-col gap-4 min-h-[150px] h-auto p-5" style={{backgroundColor:'rgb(2 19 45)', color:'bisque'}}>
                    <div className='flex justify-start items-center gap-5 h-[20%] m-5'>
                        <img src={code} alt="" className='h-[30px] w-[30px]'/>
                        <div className='text-[1rem] font-bold'>Programming Languages</div>
                    </div>

                    <div className='flex flex-wrap gap-2' style={{opacity: 1}}>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Java</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Javascript</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>C++</span>
                    </div>
                </div>

                <div className="border border-black rounded-2xl flex flex-col gap-4 min-h-[150px] h-auto p-5" style={{backgroundColor:'rgb(2 19 45)', color:'bisque'}}>
                    <div className='flex justify-start items-center gap-5 h-[20%] m-5'>
                        <img src={frontendImg} alt="" className='h-[30px] w-[30px]'/>
                        <h2 className='text-[1rem] font-bold'>FrontEnd Development</h2>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>HTML</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>CSS</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>JavaScript</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>React JS</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Tailwind CSS</span>
                    </div>
                </div>

                <div className="border border-black rounded-2xl flex flex-col gap-4 min-h-[150px] h-auto p-5" style={{backgroundColor:'rgb(2 19 45)', color:'bisque'}}>
                    <div className='flex justify-start items-center gap-5 h-[20%] m-5'>
                        <img src={backend} alt="" className='h-[30px] w-[30px]'/>
                        <h2 className='text-[1rem] font-bold'>BackEnd Development</h2>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Knowledge of Java Servelets & JSP</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Spring Boot</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>MySQL</span>
                    </div>
                </div>

                <div className="border border-black rounded-2xl flex flex-col gap-4 min-h-[100px] h-auto p-5" style={{backgroundColor:'rgb(2 19 45)', color:'bisque'}}>
                    <div className='flex justify-start items-center gap-5 h-[20%] m-5'>
                        <img src={tools} alt="" className='h-[30px] w-[30px]'/>
                        <h2 className='text-[1rem] font-bold'>Tools</h2>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>VS Code</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Git</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Github</span>
                        <span className='inline-block px-3 py-1 bg-background border border-border rounded-full text-sm' style={{backgroundColor:'rgb(2, 8, 23)', color:'white'}}>Postman</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;