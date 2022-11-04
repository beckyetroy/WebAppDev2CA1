import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PlaceIcon from '@mui/icons-material/Place';
import Typography from "@mui/material/Typography";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const PersonDetails = ({ person }) => {

    function getAge(date) {
        var today = new Date();
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
      <Paper component="ul" sx={{...root}}>
        <Chip label={`Born: ${person.birthday}`} />
        {person.deathday ?
            <Chip label={`Died: ${person.deathday}`} />
        : <Chip label={`Age: ${getAge(person.birthday)}`} /> }
        {person.gender === 2 ?
            <Chip icon={<MaleIcon />} label={`Male`} />
        :   <Chip icon={<FemaleIcon />} label={`Female`} /> }
        <Chip
          icon={<PlaceIcon />}
          label={`From: ${person.place_of_birth}`}
        />
        <Chip label={`Known for: ${person.known_for_department}`}
        />
      </Paper>
      </>
  );
};
export default PersonDetails;