import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const formControl = 
  {
    margin: 1,
    minWidth: 150,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterCrewCard(props) {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleSecondTextChange = (e, props) => {
    handleChange(e, "job", e.target.value);
  };

  return (
    <Card 
      sx={{
        maxWidth: 200,
        minWidth: 175,
        backgroundColor: "rgb(255, 153, 102)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h1">
          <SearchIcon fontSize="small" />
          Search Crew
        </Typography>
        <TextField
          sx={{...formControl}}
          id="filled-search"
          label="By Name"
          type="search"
          variant="filled"
          value={props.actorFilter}
          onChange={handleTextChange}
        />
        <TextField
          sx={{...formControl}}
          id="filled-search"
          label="By Job"
          type="search"
          variant="filled"
          value={props.characterFilter}
          onChange={handleSecondTextChange}
        />
      </CardContent>
    </Card>
  );
}