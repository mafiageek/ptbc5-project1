// First thing I would like to see is a components folder to organize your files better. Having all files in the src directory is a pain to go through as a code reviewer
import React, { useState } from "react";
import AddJournal from "./AddJournal";
import JournalsList from "./JournalsList";
import Search from "./Search";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

import "./App.css";
// Bootstrap CSS - Redundant comment
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS - Redundant comment
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [journalsList, setJournalsList] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    console.log("query", query); // let's remove console.logs before we push our code
  };

  const addJournalHandler = (
    // I think the "u" here is quite unclear as to what these mean. Abbreviations should be avoided to the code reader to understand properly, unless it is very clear to everyone what they mean.
    uImageURL,
    uCountry,
    uJournal,
    uDate,
    uLat,
    uLng
  ) => {
    // I think no need to use prevJournalsList here, but just use journalsList in our state definition in line 17
    setJournalsList((prevJournalsList) => {
      return [
        ...prevJournalsList,
        {
          imageURL: uImageURL,
          country: uCountry,
          journal: uJournal,
          date: uDate,
          position: {
            lat: uLat,
            lng: uLng,
          },
          id: Math.random().toString(),
        },
      ];
    });
  };

  // let's remove comments before we push our code, unless they actually help the reader or are for learning purposes

  // const handleEdit = (uImageURL, uCountry, uJournal, uId) => {
  //   journalsList.forEach((journal) => {
  //     if (journal.id === uId) {
  //       journal.imageURL = uImageURL;
  //       journal.country = uCountry;
  //       journal.journal = uJournal;
  //     }
  //   });
  // };

  console.log(journalsList);

  const handleDelete = (event, journalId) => {
    // why the need for stopPropagation here?
    event.stopPropagation();
    setJournalsList((prevJournalsList) =>
      prevJournalsList.filter((journal) => journal.id !== journalId)
    );
  };

  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Search handleSearch={handleSearch} query={query} />
      <AddJournal onAddJournal={addJournalHandler} />
      <JournalsList journals={journalsList} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
