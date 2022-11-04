import React from "react";
import PersonHeader from "../headerPerson";
import Grid from "@mui/material/Grid";
import Image from "@mui/icons-material/Image";
import maleImg from '../../images/male-person-placeholder.jpg';
import femaleImg from '../../images/female-person-placeholder.jpg';

const TemplatePersonPage = ({ person, children }) => {

  return (
    <>
      <PersonHeader person={person} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={4}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
          <img style={{maxWidth:"250px"}}src={ person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : person.gender === 2 ? maleImg 
                : femaleImg
            }
        />
          </div>
        </Grid>

        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;