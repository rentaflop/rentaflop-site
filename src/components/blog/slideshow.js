import React from 'react';
import Carousel from 'react-material-ui-carousel'
import art1 from './../../static/art/art1.jpg';
import art2 from './../../static/art/art2.jpg';
import art3 from './../../static/art/art3.jpg';
import art4 from './../../static/art/art4.jpg';
import art5 from './../../static/art/art5.jpg';
import art6 from './../../static/art/art6.jpg';
import art7 from './../../static/art/art7.jpg';
import art8 from './../../static/art/art8.jpg';
import art9 from './../../static/art/art9.jpg';


export default function SlideShow(props) {
  var images = [art1, art2, art3, art4, art5, art6, art7, art8, art9];

  return (
    <>
      <Carousel autoPlay={false} sx={{pt: 3}}>
	{
          images.map((image) => <img alt="" src={image} style={{"height": "600px", "width": "600px", "display": "block", "margin-left": "auto",
							 "margin-right": "auto"}} /> )
	}
      </Carousel>
      <em style={{"textAlign": "center", "display": "block"}}>4096x4096 pixel resolution art produced by AI Artist</em>
    </>
  )
}
