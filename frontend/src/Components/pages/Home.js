import React from 'react'
import './format.css'
import DarkVariantExample from './Carousel'
import { Grid } from '@mui/material'


function Home() {
  
  return (
    <div className='topPortion'>
      <Grid>
      <center><img className='bg_img' src='https://cdn.dribbble.com/users/952407/screenshots/17672558/media/551556360e747b7fde7b2dc3565a34a6.gif'></img></center>
      <div class="top">Tripable</div>
      </Grid>
      <div>
        <div className='carousel'>
        <center><h2>Popular Places to Visit</h2></center>
        <br></br>
          <Grid container spacing={2}>
            <Grid item xs={6}>
        <DarkVariantExample name='Udaipur'
                link1 = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTMMs0N5lzB8xVl0tFHP1zyNOpxVFDW2YfDpVCWhHwHxWF9r2_xX7eqH7gXIvKs7ljFKjYrndWW9BCydABCdH6oYbpwh4LZ"
                link2 = "https://lh5.googleusercontent.com/p/AF1QipNcdvX-TU93Eb28ARm3OM6sko7qWEyL_NNEeXZ-=w540-h312-n-k-no"
                link3 = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRlYrY4nLg12uAWuEhJ6jjZFmGa0eYtPfsRWwcXLQ0kc3VS2i0clEur2m88YqPL8DvnxZRYQJ8uvbCJPpLIbBwgPn1hr-kR"
        />
        </Grid>
        <Grid item xs={6}>
        <DarkVariantExample name='Manali'
        link1 = "https://lh5.googleusercontent.com/p/AF1QipOiaARoey4HjD3F7UXyErRTzrhPLR9HmadEYMSB=w540-h312-n-k-no"
        link2 = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ9lT9a1g9O-25FrEbRMfxxZ529NwAO82FkGDOltuHL8OjI2uw02svz6uBNCFWtjV-PX7JEdwvrlCAsOOVjbEpahPIRYevN"
        link3 = "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS1wOpWXtR8MfpxJAmwrFLOPp_zIEXVz8EZHl6t4NRZ7dHxA7OEPAtLVn5bxk1APveCRFVJHao3EeNWJ6m8zRyf8gECrbWs"
    />
        </Grid>
        <Grid item xs={6}>
        <DarkVariantExample name='Goa'
        link1 = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQp-B_ZdPPyZYIw-ygdfS-ap_Umo3V0sBggyNGSE2jWNcR8I5wrDZbRw7A9ZYFhBwhCSz4UVaVW9CXi_NXmGMHYPtK4PxkO"
        link2 = "https://lh5.googleusercontent.com/p/AF1QipMdb_SSdlr3UFJXZZRYPT-KKf4-qsyQumlf1mod=w540-h312-n-k-no"
        link3 = "https://lh5.googleusercontent.com/p/AF1QipNdh6s-FIUe1bNNbrZ-N3jxuj-UFJQ0fsvQHhkZ=w540-h312-n-k-no"
    />
        </Grid>
        <Grid item xs={6}>
        <DarkVariantExample name='Munnar'
        link1 = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSee9qnOgO9WHF9RjUfgKaHOQ79J-t-u-dncRVreenkelPUExM13ugomZQbqoCRVdumibOhEAgIbVygB8UQ9fBgwSbp5b1G"
        link2 = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTlLIlDhRRH1jBinmMAZkoAvs5RfjP7oLOpbumkKxGuFq2knZeaQENLNyHNQjqtHMnMSWKT3m6Tnyj4fVNPga1Ddmjaae50"
        link3 = "https://lh5.googleusercontent.com/p/AF1QipOAqrU7Mz8qR_HT54dQHO1kfpL532mofvzxmGBk=w540-h312-n-k-no"
    />
        </Grid>
        </Grid>
        </div>
      </div>
    </div>
  )
}

export default Home