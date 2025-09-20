import {DataComponent} from "./components/DataComponent/DataComponent.jsx";
import {ErrorComponent} from "./components/ErrorComponent/ErrorComponent.jsx";
import {LoadingComponent} from "./components/LoadingComponent/LoadingComponent.jsx";
import './App.css'

export const BASE_URL = 'http://localhost:7070/'
const DATA = 'data'
const LOAD = 'loading'
const ERROR = 'error'

export const App = () => {
  return (
    <div>
      <h1>useJsonFetch</h1>

      <div className="component">
        <DataComponent endpoint={DATA}/>
      </div>

      <div className="component">
        <ErrorComponent endpoint={ERROR}/>
      </div>

      <div className="component">
        <LoadingComponent endpoint={LOAD}/>
      </div>
    </div>
  );
};


export default App;