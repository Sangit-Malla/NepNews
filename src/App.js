import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)
    return (
      <div>
        <Navbar />
        <LoadingBar
        height = {4}
        color='#f11946'
        progress= {progress}
        
      />
        <Routes>
        <Route exact path="/" element={<News setprogress={setprogress} apiKey={apiKey} key="general" country="in" category="general" />}></Route>
          <Route exact path="/general" element={<News setprogress={setprogress} apiKey={apiKey} key="general" country="in" category="general" />}></Route>
          <Route exact path="/science" element={<News setprogress={setprogress} apiKey={apiKey} key="science" country="in" category="science" />}></Route>
          <Route exact path="/entertainment" element={<News setprogress={setprogress} apiKey={apiKey} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/business" element={<News setprogress={setprogress} apiKey={apiKey} key="business" country="in" category="business" />}></Route>
          <Route exact path="/health" element={<News setprogress={setprogress} apiKey={apiKey} key="health" country="in" category="health" />}></Route>
          <Route exact path="/sports" element={<News setprogress={setprogress} apiKey={apiKey} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setprogress={setprogress} apiKey={apiKey} key="technology" country="in" category="technology" />}></Route>
        </Routes>

      </div>
    )
  
}

export default App;




