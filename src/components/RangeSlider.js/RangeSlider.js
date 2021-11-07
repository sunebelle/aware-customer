import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import _ from "lodash";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#ffa15f",
          "& .css-14pt78w-MuiSlider-rail": {
            backgroundColor: "#eaeaea",
          },
        },
      },
    },
  },
});
const RangeSlider = ({ setPrice, min, max }) => {
  const [value, setValue] = useState([0, 300]);
  const handleChangeValue = (event, newValue) => {
    setPrice(newValue);
    setValue(newValue);
  };
  return (
    <div className="filter-border-dashed flex-col w-full">
      <ThemeProvider theme={theme}>
        <Slider
          value={value}
          min={min * 1}
          max={max * 1}
          onChange={handleChangeValue}
          // valueLabelDisplay="auto"
        />
      </ThemeProvider>
      <div className="flex justify-between items-center">
        <p className="Montserrat-s font-normal text-[#4d4d4d]">${value[0]}</p>
        <p className="Montserrat-s font-normal text-[#4d4d4d]">${value[1]}</p>
      </div>
    </div>
  );
};

export default RangeSlider;
