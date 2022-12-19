import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RatingCard = (props) => {
  const [value, setValue] = React.useState();

  return (
    <Box>
      <Rating
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        precision={props.precision}
        size={props.size}
        disabled={props.disabled}
        max={props.maxRatingNum}
        sx={props.sx}
      />
    </Box>
  );
};

export default RatingCard;
