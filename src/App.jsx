import "./App.css";
import Badge from "./components/Badges/Badge";

function App() {
	return (
		<>
			<h1>Badges</h1>
			<Badge>Default</Badge>

			<Badge colour='blue' shape='square'>
				Blue
			</Badge>

			<Badge colour='green' shape='pill'>
				Green
			</Badge>

			<Badge colour='grey'>
        Grey
      </Badge>

      <Badge colour='indigo' shape='pill'>
        Indigo
      </Badge>

			<Badge colour='yellow' shape='square'>
				Yellow
			</Badge>
		</>
	);
}

export default App;
