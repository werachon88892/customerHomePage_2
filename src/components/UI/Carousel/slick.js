import Slick from 'react-slick';  

function SlickSlider({children, settings}) {
    return (
        <Slick {...settings}>
            {children} 
        </Slick>
    );
}

export default SlickSlider;