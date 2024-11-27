import Carousel from 'react-bootstrap/Carousel';

function MySlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="/img/slider1.jpg" className='w-100' alt="" />
                <Carousel.Caption>
                    <h3 className='text-primary'>First slide label</h3>
                    <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://placehold.co/1536x500?text=slider2" className='w-100' alt="" />
                <Carousel.Caption>
                    <h3 className='text-primary'>Second slide label</h3>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://placehold.co/1536x500?text=slider3" className='w-100' alt="" />
                <Carousel.Caption>
                    <h3 className='text-primary'>Third slide label</h3>
                    <p className='text-dark'>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MySlider;