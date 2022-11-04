import React from "react";
import Crew from "../crewCard";
import Grid from "@mui/material/Grid";

const CrewList = ( {crews, action }) => {
  let crewCards = crews.map((c) => (
    <Grid key={c.credit_id} item xs={10} sm={5} md={3} lg={2} xl={1}>
      <Crew key={c.credit_id} crew={c} action={action} />
    </Grid>
  ));
  return crewCards;
};

export default CrewList;