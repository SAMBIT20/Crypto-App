import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
const darkThem = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyle();
  const history = useNavigate();
  const { currency, setCurrency } = CryptoState();
  return (
    <ThemeProvider theme={darkThem}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history("../")}
              className={classes.title}
            >
              Jet Crypto
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
