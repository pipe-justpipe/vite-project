import logo from '../assets/pngegg.png'
const NavBar = ()=>{
    return (
    <>
        <div className="bg-[#b5838d] hover:bg-blue-400 px-20 py-5 text-white text-lg flex justify-between ">
            <div >
                <img src={logo} alt="" className="w-20 hover:animate-bounce" />
            </div>
            <div className="flex">
                <ul className="flex gap-6 items-center">
                    <li>Resume</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Tech Stack</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default NavBar