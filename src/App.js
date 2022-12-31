import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import TransactionsPage from "./Pages/TransactionsPage";
import WalletsPage from "./Pages/WalletsPage";
import DevelopmentPage from "./Pages/DevelopmentPage";
import SupplyPage from "./Pages/SupplyPage";
import AboutPage from "./Pages/AboutPage";
import SummaryPage from "./Pages/SummaryPage";
import StakingPage from "./Pages/StakingPage";
import Layout from "./Layout/Layout";

function App() {
  const themeOptions = {
    palette: {
      mode: "light",
      primary: {
        main: "#2196f3", // primary theme color + AppBar Color
        light: "#6ec6ff",
        dark: "#0069c0",
        contrastText: "#000",
      },
      secondary: {
        main: "#fff176", // secondary theme color
        light: "#ffffa8",
        dark: "#cabf45",
        contrastText: "#000",
      },
      info: {
        main: "#333",
      },
      background: {
        default: "#ccc", // color of all your surfaces
        paper: "#6ec6ff", // color of all your paper surfaces
      },
      text: {
        primary: "#000", // text on primary color
        secondary: "#000", // text on secondary color
        disabled: "#606",
      },
      topnav: {
        main: "#0069c0", // AppBar Color
      },
    },
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          size: "small",
        },
      },
      MuiCheckbox: {
        defaultProps: {
          size: "small",
        },
      },
      MuiFab: {
        defaultProps: {
          size: "small",
        },
      },
      MuiFormControl: {
        defaultProps: {
          margin: "dense",
          size: "small",
        },
      },
      MuiFormHelperText: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiInputBase: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiInputLabel: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiRadio: {
        defaultProps: {
          size: "small",
        },
      },
      MuiSwitch: {
        defaultProps: {
          size: "small",
        },
      },
      MuiTextField: {
        defaultProps: {
          margin: "dense",
          size: "small",
        },
      },
      MuiList: {
        defaultProps: {
          dense: true,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          dense: true,
        },
      },
      MuiTable: {
        defaultProps: {
          size: "small",
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
      },
      MuiPaper: {
        defaultProps: {
        },
      }
    },
    overrides: {
      MuiPaper: {
        root: {
          MuiDrawer: {
            root: {
            },
          },
        },
      },
      MuiSwitch: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
            transform: "translateX(16px)",
            color: "#111",
            "& + $track": {
              opacity: 1,
              border: "none",
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: "1px solid #bdbdbd",
          backgroundColor: "#111",
          opacity: 1,
          transition:
            "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
  };

  const themeObject = createTheme(themeOptions);

  return (
    <ThemeProvider theme={themeObject}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/transactions"
            element={
              <Layout>
                <TransactionsPage className="SubPage" />
              </Layout>
            }
          />
          <Route
            path="/wallets"
            element={
              <Layout>
                <WalletsPage className="SubPage" />
              </Layout>
            }
          />
          <Route
            path="/development"
            element={
              <Layout>
                <DevelopmentPage className="SubPage" />
              </Layout>
            }
          />
          <Route
            path="/supply"
            element={
              <Layout>
                <SupplyPage className="SubPage" />
              </Layout>
            }
          />
          <Route
            path="/staking"
            element={
              <Layout>
                <StakingPage className="SubPage" />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage className="SubPage" />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <SummaryPage className="SubPage" />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
