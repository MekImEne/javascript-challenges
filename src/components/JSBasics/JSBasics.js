import React from 'react';
import { Box, Button, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { BASIC_EXERCICES } from './exercices';

const JSBasics = () =>{
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
      style={{marginTop: 10}}
    >
      {
        BASIC_EXERCICES.map((exo, index) =>
          <Grid key={index} item xs={12} sm={6}>
            <Card>
              <CardHeader
                title={exo.numExo}
              />
              <Divider />
              <Box p={2}>
                <Box sx={{ minHeight: { xs: 0, md: 70 } }} p={2}>
                  <Typography variant="subtitle1">
                    {exo.question}
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={()=> console.log(exo.solution)}
                >
                  Try
                </Button>
              </Box>
            </Card>
          </Grid>
      )
      }
      
    </Grid>
    
  )
}

export default JSBasics;
