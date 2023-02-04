// reactstrap components
import logging from '@/core/common/logging';
import Image from 'next/image';
import { useState } from 'react';
import {
  Button,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Row,
} from 'reactstrap';

const CarouselElement = () => {
  const [animating, setanimating] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const items = [
    {
      id: 0,
      src: require('src/assets/img/theme/img-1-1200x1000.jpg'),
      altText: 'img1',
      caption: 'frase de efeito',
      header: 'Titulo top!!!',
    },
    {
      id: 1,
      src: require('src/assets/img/theme/img-2-1200x1000.jpg'),
      altText: 'img2',
      caption: 'frase de efeito',
      header: 'Titulo top!!!',
    },
  ];

  function onExiting() {
    setanimating(true);
    logging.info('finishing');
  }

  function onExited() {
    logging.info('finishing');
    setanimating(true);
  }
  function next() {
    // if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setactiveIndex(nextIndex);
    logging.info('next ->', nextIndex);
  }

  function previous() {
    // if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setactiveIndex(nextIndex);
    logging.info('prev ->', nextIndex);
  }

  function goToIndex(newIndex: number) {
    if (animating) return;
    setactiveIndex(newIndex);
  }

  const slides = items.map((item, id) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <Image height={500} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.header}
        />
      </CarouselItem>
    );
  });
  return (
    <>
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-md">
          {/* <div>{items[0]!.src}</div> */}
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Bootstrap carousel
              </h1>
              <p className="lead text-white mt-4">
                Argon Design System comes with four pre-built pages to help you
                get started faster. You can change the text and images and
                you're good to go.
              </p>
              <Button
                className="btn-white mt-4"
                color="default"
                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
              >
                See all components
              </Button>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                  />
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default CarouselElement;
