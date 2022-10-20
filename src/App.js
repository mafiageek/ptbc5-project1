import React, { useState } from "react";
import AddJournal from "./AddJournal";
import JournalsList from "./JournalsList";
import Search from "./Search";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [journalsList, setJournalsList] = useState([]);

  const addJournalHandler = (
    uImageURL,
    uCountry,
    uJournal,
    uDate,
    uLat,
    uLng
  ) => {
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
    event.stopPropagation();
    setJournalsList((prevJournalsList) =>
      prevJournalsList.filter((journal) => journal.id !== journalId)
    );
  };

  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Search />
      <AddJournal onAddJournal={addJournalHandler} />
      <JournalsList journals={journalsList} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
