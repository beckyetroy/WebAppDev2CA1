import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterCastCard";
import CastList from "../castList";
import Grid from "@mui/material/Grid";

function CastListPageTemplate({ casts, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [characterFilter, setCharacterFilter] = useState("");

  let displayedCasts = casts
    .filter((c) => {
      return c.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((c) => {
      return c.character.toLowerCase().search(characterFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "character") setCharacterFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={1}>
        <Grid key="find" item xs={10} sm={5} md={3} lg={2} xl={1.5}>
          <FilterCard
            onUserInput={handleChange}
            actorFilter={nameFilter}
            characterFilter={characterFilter}
          />
        </Grid>
        <CastList action={action} casts={displayedCasts}></CastList>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;