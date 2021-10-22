import React from "react";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
const App = ({ price, setPrice, min, max }) => {
  return (
    <div className="filter-border-dashed flex-col w-full">
      <ThemeProvider theme={theme}>
        <Slider
          value={price}
          min={min * 1}
          max={max * 1}
          onChange={(event, newValue) => setPrice(newValue)}
          // valueLabelDisplay="auto"
        />
      </ThemeProvider>
      <div className="flex justify-between items-center">
        <p className="Montserrat-s font-normal text-[#4d4d4d]">${price[0]}</p>
        <p className="Montserrat-s font-normal text-[#4d4d4d]">${price[1]}</p>
      </div>
    </div>
  );
};

export default App;
