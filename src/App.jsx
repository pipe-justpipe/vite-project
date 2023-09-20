import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Welcome from "./components/welcome";
import "./App.css";
import State from "./components/State";
import Countbtn from "./components/Countbtn";
import Effect from "./Effect";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('Piper')

  const data = [
    {
      description:
        "Software Engineer with a passion for building scalable web applications.",
      position: "Software Engineer",
      company: "TechCorp",
      name: "Alice Johnson",
      image: "https://example.com/alice.jpg",
    },
    {
      description:
        "Marketing Specialist with expertise in digital marketing strategies.",
      position: "Marketing Specialist",
      company: "Marketing Pro",
      name: "Bob Smith",
      image: "https://example.com/bob.jpg",
    },
    {
      description:
        "Experienced Project Manager skilled in leading cross-functional teams.",
      position: "Project Manager",
      company: "Project Solutions Inc.",
      name: "Carol Davis",
      image: "https://example.com/carol.jpg",
    },
    {
      description:
        "Creative Graphic Designer known for delivering stunning visuals.",
      position: "Graphic Designer",
      company: "DesignMasters",
      name: "David Brown",
      image: "https://example.com/david.jpg",
    },
  ];

  const hey = () => {
    alert("you clicked me");
  };   
  
  useEffect(() => {
    document.title = `${name}'s website`;
  },[name])

  const text ="how are you?";
  return (
    <div className="h-screen">
      <NavBar />
      <Welcome alert={hey} statement={text} data={data} />
      <button onClick={()=>setName('change')} className="bg-red-800 text-white">Click</button>
      <div className="flex gap-4 m-5">
        {data.map((item, index) => (
          <Cards
            key={index}
            description={item.description}
            position={item.position}
            company={item.company}
            name={item.name}
            image={item.image}//////
          />
        ))}
      </div>
      <AccountBalanceIcon/>
      <State/>
      <Countbtn/>
      <Effect/>
    </div>
  );
}

export default App;
