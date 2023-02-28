import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "./signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [value, setValue] = React.useState(Date.now());
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [titleValue, setTitleValue] = React.useState();
  const [descValue, setDescValue] = React.useState();
  return (
    // <BrowserRouter>
    //   <Route path="/signup" component={Signup} />
    // </BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Todo List</h1>
        <nav>
          <div className="loginDiv">
            {/* <Button variant="outlined" href="/">Login</Button> */}
            <Button variant="outlined" href="/signup">
              S'inscrire
            </Button>
          </div>
          <div className="logoutDiv">
            <Button variant="outlined">Logout</Button>
            <Button variant="outlined">Account</Button>
          </div>
        </nav>
      </header>
      <main>
        <Button onClick={handleOpen}>Ajouter une tâche</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Stack spacing={3}>
              <FormControl>
                {/* <FormLabel color="info">Nouvelle tâche</FormLabel> */}
                <TextField
                  id="titleId"
                  label="Titre"
                  value={titleValue}
                  onChange={(newTitle) => setTitleValue(newTitle.target.value)}
                />
              </FormControl>
              <TextField
                id="descId"
                label="Description"
                value={descValue}
                onChange={(newDesc) => setDescValue(newDesc.target.value)}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Date et heure"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Button>Ajouter</Button>
              <FormHelperText></FormHelperText>
            </Stack>
          </Box>
        </Modal>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
