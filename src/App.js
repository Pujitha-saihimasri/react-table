import React, { Component } from "react"
import "./App.css"
import Table from "./Components/Table/Table"
const list = [
  { firstname: "word",          lastname: "environment", Age:"25", status:"single",        visits: "90"},
  { firstname: "hands",         lastname: "desk",        Age: "14",status: "single",       visits: "16"},
  { firstname: "boy",           lastname: "performance", Age: "20",status: "relationship", visits: "25"},
  { firstname: "relationship",  lastname: "sail",        Age: "24",status: "complicated",  visits: "36"},
  { firstname: "resolution",    lastname: "vest",        Age: "7", status: "relationship", visits: "59"},
  { firstname: "assistant",     lastname: "sea",         Age: "18",status: "single",       visits: "41"},
  { firstname: "print",         lastname: "history",     Age: "8", status: "complicated",  visits: "30"},
  { firstname: "president",     lastname: "condition",   Age: "13",status: "complicated",  visits: "77"},
  { firstname: "opportunity",   lastname: "friendship",  Age: "8", status: "relationship", visits: "54"},
  { firstname: "crack",         lastname: "twig",        Age: "22",status: "single",       visits: "57"},
  { firstname: "brass",         lastname: "playground",  Age: "22",status: "relationship", visits: "25"},
  { firstname: "ground",        lastname: "food",        Age: "18",status: "complicated",  visits: "53"},
  { firstname: "rose",          lastname: "appliance",   Age: "11",status: "relationship", visits: "35"},
  { firstname: "title",         lastname: "sink",        Age: "0", status: "complicated",  visits: "99"},
  { firstname: "gun",           lastname: "software",    Age: "13",status: "single",       visits: "9"},
  { firstname: "obligation",    lastname: "industry",    Age: "7", status: "single",       visits: "23"},
  { firstname: "caption",       lastname: "window",      Age: "9", status: "complicated",  visits: "75"},
  { firstname: "tea",           lastname: "drawing",     Age: "25",status: "single",       visits: "59"},
]
const colNames = ['FirstName','LastName','Age','Status','Visits']
  class App extends Component{
    render () {
      return (
      <div className="App" >
<Table list={list}  colNames={colNames} />


      </div>
      )
    }
  }

export default App;