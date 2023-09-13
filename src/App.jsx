import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Welcome from "./components/welcome";
import "./App.css";

function App() {
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
  return (
    <div className="bg-[#ffcdb2] h-screen">
      <NavBar />
      <Welcome alert={hey} data={data} />

      <div className="flex gap-4 m-5">
        {data.map((item, index) => (
          <Cards
            key={index}
            description={item.description}
            position={item.position}
            company={item.company}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
