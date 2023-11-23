import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Card = () => {
  return (
    <Box  sx={{
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        width: {
            xs:1,
            md:200
        },
        backgroundColor: 'red'
      }}>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimple.wikipedia.org%2Fwiki%2FPicture&psig=AOvVaw2RLpplnsfMgAgPahiB-nEM&ust=1700816839308000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCf8Lrh2YIDFQAAAAAdAAAAABAD" alt="" />
       <Typography variant='h3'>Product</Typography>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda fugiat facilis, suscipit neque pariatur laboriosam! Similique unde temporibus qui perferendis.</p>
    </Box>
  )
}

export default Card