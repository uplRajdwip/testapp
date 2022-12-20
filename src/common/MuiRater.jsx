import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const getLabelText=(value)=> {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const HoverRating=(props)=> {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name={props.name}
        value={value}
        precision={0.5}
        size={props.size}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
          console.log(hover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

export default HoverRating