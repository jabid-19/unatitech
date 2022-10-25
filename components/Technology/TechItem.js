import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import Typography from '@mui/material/Typography'

// const Items = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function TechItems(techItems) {
  const allItems = techItems?.techItems

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 3, sm: 6, md: 8 }}>
        {Array.from(allItems).map((item, index) => (
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            xs={1}
            sm={1}
            md={1}
            key={index}>
            <Image
              alt="Logo"
              loader={imageLoader}
              src={item.source}
              width={'40'}
              height={'40'}
            />
            <Typography variant="overline" display="block" gutterBottom>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
