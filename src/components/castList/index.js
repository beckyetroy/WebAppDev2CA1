import React from "react";
import Cast from "../castCard";
import Grid from "@mui/material/Grid";

const CastList = ( {casts, action }) => {
  let castCards = casts.map((c) => (
    <Grid key={c.credit_id} item xs={10} sm={5} md={3} lg={2} xl={1}>
      <Cast key={c.credit_id} cast={c} action={action} />
    </Grid>
  ));
  return castCards;
};

export default CastList;