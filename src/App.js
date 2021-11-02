import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import './App.css';
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h5" style={{ flex: 1 }} gutterBottom align="left">
            Randall Library My Research Strategy
          </Typography>
          <Button href="https://library.uncw.edu" style={{ color: '#006666' }}>
            Return to Randall Library Website
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default App;
