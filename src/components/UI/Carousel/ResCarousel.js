import { Carousel } from "react-responsive-carousel";

function Resarousel({children, settings}) {
    return (
        <Carousel {...settings}>
            {children} 
        </Carousel>
    );
}

export default Resarousel;