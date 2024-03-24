import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Lato", "Roboto", "Arial"`,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700,
    fontWeightFat: 900,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#3E68A8",
          },
          "& label.Mui-focused": {
            color: "#3E68A8",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#3E68A8",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3E68A8",
            },
            "&:hover fieldset": {
              borderColor: "#3E68A8",
              borderWidth: "0.15rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3E68A8",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
