import Carousel from 'react-bootstrap/Carousel'

// IMAGES
import farm1 from '../images/farm1.jpg'

export default function GalleryPage(props) {
    return (
        <main className="GalleryPage">
            <h1>Gallery</h1>
            <Carousel >

                <Carousel.Item >
                    <a href='https://workitout.netlify.app'>
                        <img
                        className="d-block w-100"
                        src={ farm1 }
                        alt="First slide"
                        />
                    </a>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item >
                    <a href='https://workitout.netlify.app'>
                        <img
                        className="d-block w-100"
                        src={ farm1 }
                        alt="Second slide"
                        />
                    </a>

                    <Carousel.Caption>
                        <h3>2nd slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item >
                    <a href='https://workitout.netlify.app'>
                        <img
                        className="d-block w-100"
                        src={ farm1 }
                        alt="Second slide"
                        />
                    </a>

                    <Carousel.Caption>
                        <h3>3rd slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>
        </main>
    )
}