import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, Box, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Snackbar, ToggleButton, ToggleButtonGroup } from '@mui/material';

const products = [
    { name:'Product Name', price: '$1000', thumb:'https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
]

const category = [
    {label:'apparel', value:1},
    {label:'electronics', value:2},
    {label:'personal care', value:3}
]

export default function Listing() {
     const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [age, setAge] = useState(1);

  const handleSort = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    setOpen(false);
    if (reason === 'clickaway') {
      return;
    }
  };

  const DeleteProduct = (a,b)=> {
    setOpen(a)
    setSnackbarOpen(b);
  }

  
  

  return (
    <>
      <Snackbar open={snackbarOpen} 
      anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
      autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product Shoes Deleted Successfully
        </Alert>
      </Snackbar>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm deletion of product!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete the product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={()=> DeleteProduct(false, true)}>Ok</Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

    <Box sx={{display:'flex', justifyContent:'center', my:2}}>
        <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
        <ToggleButton value="web">All</ToggleButton>
            {category.map((e)=>
                <ToggleButton value={e.value}>{e.label}</ToggleButton>
            )}
        </ToggleButtonGroup>
    </Box>
            
    <Box sx={{ maxWidth: 320, mx:'auto', my:3}}>
        <Typography>Sort By:</Typography>
        {/* {age} */}
        <FormControl fullWidth>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleSort}
            >
            <MenuItem value={1}>Default</MenuItem>
            <MenuItem value={2}>Price: High to Low</MenuItem>
            <MenuItem value={3}>Price: Low to High</MenuItem>
            <MenuItem value={3}>Newest</MenuItem>
            </Select>
        </FormControl>
    </Box>
    
    <Container maxWidth="lg">
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {products.map((e) => (
        <Grid item xs={4}>
            <Card>
                <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={e.thumb}
                />
                <CardContent>
                <Box sx={{justifyContent:'space-between', display:'flex'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Product Name
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        $10000
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>

                <Box sx={{justifyContent:'space-between', mt:4, display:'flex'}}>
                    <Button variant="contained" size="small">Buy</Button>
                    <Box sx={{mx:-0.5}}>
                        <IconButton aria-label="delete" size="medium" edge="start" sx={{mx:0.5}}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" size="medium" edge="start" sx={{mx:0.5}}>
                            <DeleteIcon fontSize="small"  onClick={handleClickOpen}/>
                        </IconButton>
                    </Box>
                </Box>
                </CardContent>
            </Card>
        </Grid>
      
    ))}
    </Grid>
    </Container>
    </>
    
  );
}