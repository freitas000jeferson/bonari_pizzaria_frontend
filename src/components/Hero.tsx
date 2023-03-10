import Image from 'next/image';
import { Button, Col, Container, Row } from 'reactstrap';
const Hero = () => {
  return (
    <>
      <div className="position-relative">
        {/* Hero for FREE version */}
        <section className="section section-hero section-shaped bg-primary">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-default ">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <Image
                    alt="..."
                    className="img-fluid"
                    src={require('src/assets/img/brand/nextjs_argon_white.png')}
                    style={{ width: '200px' }}
                  />
                  <p className="lead text-white">
                    A beautiful Design System for Bootstrap 4. It's Free and
                    Open Source.
                  </p>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-cloud-download-95" />
                      </span>
                      <span className="btn-inner--text">Download React</span>
                    </Button>{' '}
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="github"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      size="lg"
                      target="_blank"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-github" />
                      </span>
                      <span className="btn-inner--text">
                        <span className="text-warning mr-1">Star us</span>
                        on Github
                      </span>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">
                      *proudly coded by
                    </small>
                    <Image
                      alt="..."
                      className="ml-1"
                      style={{ height: '28px', objectFit: 'contain' }}
                      src={require('src/assets/img/brand/white.png')}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
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
      </div>
    </>
  );
};

export default Hero;
