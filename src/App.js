import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src="https://sass-lang.com/assets/img/logos/logo.svg"
                    className="App-logo"
                    alt="logo"
                />
            </header>

            <Button>Primary</Button>
            <Button type="secondary" size="small">
                Secondary
            </Button>

            <div>
                <Form />
            </div>
        </div>
    );
}

export default App;
