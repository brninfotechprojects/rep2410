import "./App.css";

function App() {
  const gitConcepts = [
    {
      title: "Remote Repository",
      description:
        "A remote repository is a version of a project that is hosted on the internet or another network.",
      icon: "📡",
    },
    {
      title: "Local Repository",
      description:
        "A local repository is a version of a project stored on a computer.",
      icon: "💻",
    },
    {
      title: "Pull",
      description:
        "Pull is the process of fetching changes from the remote repository to a local repository.",
      icon: "⬇️",
    },
    {
      title: "Push",
      description:
        "Push is the process of sending changes from a local repository to the remote repository.",
      icon: "⬆️",
    },
    {
      title: "Clone",
      description:
        "Clone is the process of copying a remote repository to a local machine.",
      icon: "🔗",
    },
  ];

  return (
    <div className="App">
      <h1>This heading is from react application.</h1>
      <h1>
        This code is added by Manjunadh on behalf of Prashanth and Karthik
      </h1>
      <h1>This code is added by Prasant on behalf of BRN and Karthik</h1>

      <hr></hr>
      <header className="header">
        <h1>Git Demystified by Karthik</h1>
        <p>Understand key concepts of Git in a visually appealing way!</p>
      </header>
      <div className="card-container">
        {gitConcepts.map((concept, index) => (
          <div key={index} className="card">
            <div className="card-icon">{concept.icon}</div>
            <h2 className="card-title">{concept.title}</h2>
            <p className="card-description">{concept.description}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>&copy; 2025 Git Demystified | Developed by Karthik</p>
      </footer>
    </div>
  );
}

export default App;
