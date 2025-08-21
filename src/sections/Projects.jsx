import weatherImg from '../images/weatherImg.png';
import noteNest from '../images/NoteNestImg.png';
import emp from '..//images/emp.png';

const projectList = [
    {
        title: "Employee Directory API (Spring Boot, MySQL)",
        Desc : "I created a Employee Directory (CRUD) with a Spring Boot + MySQL backend to handle employee data management. Implemented RESTful APIs for create, read, update, and delete operations. On the frontend, developed a responsive and modern UI using React with Vite, ensuring smooth and dynamic interaction between client and server. Focused on clean design, modular code structure, and seamless integration between backend and frontend.",
        languages : ["Java", "Spring Boot", "MySQL", "React.js + vite"],
        githubLink : "https://github.com/Ayan-Ahmad-Sheikh/Employee-Directory.git",
        liveLink : "https://employee-directory-rho-silk.vercel.app/",
        imgLink : emp
    },

    {
        title: "Weather WebApp (JS, OpenWeatherMap API)",
        Desc : "I created a responsive weather app using JavaScript and the OpenWeatherMap API. Fetched real-time data and dynamically updated the UI with JSON, fetch, and DOM manipulation. Designed a clean interface using HTML and CSS.",
        languages : ["HTML", "CSS", "JavScript"],
        githubLink : "https://github.com/Ayan-Ahmad-Sheikh/Weather-WebApp.git",
        liveLink : "https://ayan-ahmad-sheikh.github.io/Weather-WebApp/",
        imgLink : weatherImg
    },
    
    {
        title: "Notes App (JS, LocalStorage)",
        Desc : "I created a responsive Notes app using JavaScript, HTML, and CSS. Enabled users to add, delete, and manage notes with dynamic DOM updates. Integrated localStorage to persist data across browser sessions.",
        languages : ["HTML", "CSS", "JavScript", "DOM Manipulation"],
        githubLink : "https://github.com/Ayan-Ahmad-Sheikh/Notes-website.git",
        liveLink : "https://ayan-ahmad-sheikh.github.io/Notes-website/",
        imgLink : noteNest
    }
];

function Projects() {
    return (
        <section className="min-h-screen w-full flex justify-center items-center flex-col p-10">
            <h1 className="text-4xl text-blue-800 font-extrabold m-6">Projects</h1>
            <p className="text-[20px] text-start mb-10">Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                    <div className="w-full border-2 rounded-lg overflow-hidden shadow-sm flex flex-col justify-start items-center pb-5" style={{backgroundColor:'rgb(15, 23, 42)', color:'white', borderColor:'rgb(30 41 59)'}}>
                        <img src={project.imgLink} alt="img" className="h-48 w-full overflow-hidden"/>
                        
                        <div className='p-3'>
                            <h2 className="text-xl m-5 font-bold text-start">{project.title}</h2>
                            <p className="text-sm text-justify m-5" style={{color:'rgb(148 163 184)'}}>{project.Desc}</p>
                            <div className="flex justify-center items-center flex-wrap gap-2 m-5">
                                {project.languages.map((lang) => (
                                    <span className="text-xs bg-primary/10 rounded-full px-3 py-1" style={{color:'rgb(55 128 246)', backgroundColor:'rgb(59 130 246 / 10%)'}}>{lang}</span>
                                ))}
                            </div>

                            <div className="projectLink flex justify-center items-center gap-5">
                                <a href={project.githubLink} target='_blank'><button className="px-3 h-9 text-sm text-white rounded-lg mt-3 mb-2 bg-blue-700 font-medium justify-center">Github</button></a>
                                <a href={project.liveLink} target='_blank'><button className="px-5 h-9 text-sm text-white rounded-lg mt-3 mb-2 bg-blue-700">Live Link</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;