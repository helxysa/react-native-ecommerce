import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { Login } from "./src/screens/User/Login";
import { MyOrder } from "./src/screens/User/MyOrder";
import { Register } from "./src/screens/User/Register"

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>  
    );
}