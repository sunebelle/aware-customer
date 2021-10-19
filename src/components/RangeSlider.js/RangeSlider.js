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
const App = () => {
  const [value, setValue] = React.useState([0, 300]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(value);
  return (
    <div className="filter-border-dashed flex-col w-full">
      <ThemeProvider theme={theme}>
        <Slider
          value={value}
          min={0}
          max={300}
          onChange={handleChange}
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

export default App;
