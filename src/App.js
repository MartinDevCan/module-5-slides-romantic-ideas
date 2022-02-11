import { useState } from 'react';
import { data } from "./data";
import './App.css'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";


function App() {

    const [idea, setIdea] = useState(0);
    const {id, item, description, image} = data[idea];

    const previousIdea = () => {
        setIdea((idea => {
            idea --;
            if (idea <0) {
                idea = data.length -1;
            }
            return idea;
        }))
    }

    const nextIdea = () => {
        setIdea((idea => {
            idea ++;
            if (idea > data.length -1) {
                idea = 0;
            }
            return idea;
        }))
    }

    return (<div className='main'>
        <div className='container'>
            <h1>Great Romantic Ideas</h1>
        </div>

        <div className='container'>
            <h2>{id} - {item}</h2>
        </div>

        <div className='container'>
        <img src={image} alt="idea"/>
        </div>

        <div className='container'>
            <p>{description}</p>
        </div>

        <div className='container'>
            <button onClick={previousIdea}><BsFillArrowLeftSquareFill/></button>
            <button onClick={nextIdea}><BsFillArrowRightSquareFill/></button>
        </div>


    </div>)
}

export default App;