import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider 
      defaultTheme="light" 
      attribute="class"
      enableSystem={false}
      storageKey="elior-portfolio-theme"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;