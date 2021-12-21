import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Table from "./components/projects/Table";

const mockData = {
  "projects": [
    {
      "name": "Pride: The Series",
      "type": "New Media",
      "castingDirector": "Dorrell Anthony",
      "postedDate": "June 18, 2020"
    },  
    {
      "name": "The New Guy!",
      "type": "New Media",
      "castingDirector": "Junko Goda",
      "postedDate": "May 19, 2020"
    },
    {
      "name": "Psycho, the Musical",
      "type": "Theater",
      "castingDirector": "Chris Carver",
      "postedDate": "May 01, 2020"
    },
    {
      "name": "The Last Curtain",
      "type": "Student Film",
      "castingDirector": "Ashton Avila",
      "postedDate": "April 23, 2020"
    },
    {
      "name": "American Lives, Episode 5",
      "type": "Episodic",
      "castingDirector": "Greenstein Lana",
      "postedDate": "June 18, 2020"
    },
    {
      "name": "Ambassador Gardens, Part 2",
      "type": "Student Film",
      "castingDirector": "Julie Trampush",
      "postedDate": "March 30, 2020"
    }
  ]
}
const TableView = React.forwardRef((props, ref) => {
  return (
    <>
      <Table
        ref={ref} 
        data={mockData.projects} 
      />
      
    </>
  );
});

const App = () => { 
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Route path="/" exact component={() => <TableView ref={titleRef} />} />
    </BrowserRouter>
  );
};

export default App;
