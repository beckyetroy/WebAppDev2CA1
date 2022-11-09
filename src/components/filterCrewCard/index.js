import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

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

  const sorts = ["Alphabetical", "Default", "Popularity"];

  const handleSortChange = (e, props) => {
    handleChange(e, "sort", e.target.value);
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
        <FormControl sx={{...formControl}}>
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            defaultValue=""
            value={props.sortFilter}
            onChange={handleSortChange}
          >
            {sorts.map((sort) => {
              return (
                <MenuItem key={sort} value={sort}>
                  {sort}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}