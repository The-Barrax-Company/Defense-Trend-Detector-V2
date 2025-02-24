import './App.css'
import QueryForm from './components/QueryForm'

function App() {
  return (
    <>
      <div>
        <a href="https://" target="_blank">
          <img src={"/trend-svgrepo-com.svg"} className="logo" alt="Trend" />
        </a>
        <a href="https://" target="_blank">
          <img
            src={"/fighter-jet-svgrepo-com.svg"}
            className="logo"
            alt="Jet"
          />
        </a>
      </div>
      <h1>Defense Trend Detector</h1>
      <QueryForm />
    </>
  );
}

export default App
