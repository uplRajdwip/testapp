import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
// import img1 from '../../images/aboutCarousel.png'
// import img2 from '../../images/bannerCarousel.png'
// import img3 from '../../images/wallviewVideoImage.png'



const MuiCarousel = (props) => {

    // const items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!",
    //         image: img1
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: img2
    //     },
    //     {
    //         name: "Random Name #3",
    //         description: "lorem ipsum",
    //         image: img3
    //     }
    // ]

    return (
        <>
            <Carousel
                sx={props.sx}
                duration={props.duration}
                height={props.height}
                navButtonsProps={props.navButtonsProps}
                autoPlay={props.autoPlay}
                swipe={props.swipe}
                animation={props.animation}
                strictIndexing={props.strictIndexing}
                indicators={props.indicators}
                stopAutoPlayOnHover={props.stopAutoPlayOnHover}
                interval={props.interval}
                fullHeightHover={props.fullHeightHover}
                navButtonsAlwaysVisible={props.navButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={props.navButtonsAlwaysInvisible}
                cycleNavigation={props.cycleNavigation}
                onChange={props.handleChange}
            >
                {
                    props.items?.map((item, id) =>
                        <div key={id} className={`flex justify-center items-center`}>
                            <Paper>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <img src={item.image} alt="" />
                            </Paper>
                        </div>
                    )
                }
            </Carousel>
        </>
    )
}



export default MuiCarousel