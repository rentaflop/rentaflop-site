import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'


export default function SlideShow() {
  var images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true} navButtonsProps={{style: {
            backgroundColor: '#0288D1',
	    opacity: '.2'
        }
      }}>
	{
          images.map((image) => <Image key={image} alt="Abstract AI Art" src={`/static/art/art${image}.jpg`}
	  height={600} width={600} style={{"display": "block", "marginLeft": "auto", "marginRight": "auto"}} /> )
	}
      </Carousel>
      <em style={{"textAlign": "center", "display": "block"}}>4096x4096 pixel resolution art produced by AI Artist</em>
    </>
  )
}