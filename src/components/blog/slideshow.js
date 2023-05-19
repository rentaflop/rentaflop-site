// deprecated, real file in ./components/slideshow.tsx
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import art1 from './../../static/art/art1.avif';
import art2 from './../../static/art/art2.avif';
import art3 from './../../static/art/art3.avif';
import art4 from './../../static/art/art4.avif';
import art5 from './../../static/art/art5.avif';
import art6 from './../../static/art/art6.avif';
import art7 from './../../static/art/art7.avif';
import art8 from './../../static/art/art8.avif';
import art9 from './../../static/art/art9.avif';


export default function SlideShow(props) {
  var images = [art1, art2, art3, art4, art5, art6, art7, art8, art9];

  return (
    <>
      <Carousel autoPlay={false} sx={{pt: 3}}>
	{
          images.map((image) => <img alt="Abstract AI Art" src={image} style={{"height": "600px", "width": "600px", "display": "block", "margin-left": "auto",
							 "margin-right": "auto"}} /> )
	}
      </Carousel>
      <em style={{"textAlign": "center", "display": "block"}}>4096x4096 pixel resolution art produced by AI Artist</em>
    </>
  )
}
