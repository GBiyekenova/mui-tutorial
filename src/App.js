import './App.css';
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

function App() {
  const MyCustomButton = styled(Button)(({theme}) => ({
    padding: theme.spacing(20)
  }))
  return (
    <div className="App">
      <Typography variant="myVariant">This is my app!</Typography>
      <Typography sx={{color: "myCustomColor.main"}} >Hit the like button!</Typography>
      <MyCustomButton variant="outlined" color="secondary">Hello from mui v5</MyCustomButton>
    </div>
  );
}

export default App;
