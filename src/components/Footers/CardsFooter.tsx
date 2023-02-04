import Image from 'next/image';
import Link from 'next/link';
// reactstrap components

import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';
const CardsFooter = () => {
  return (
    <>
      <footer className="footer has-cards">
        <Container className="container-lg">
          <Row>
            <Col className="mb-5 mb-md-0" md="6">
              <Card
                className="card-lift--hover shadow border-0"
                style={{
                  padding: 0,
                }}
              >
                <Link href="/landing-page">
                  <Image
                    className="img-fluid "
                    style={{}}
                    alt="..."
                    src={require('src/assets/img/theme/landing.jpg')}
                  />
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="6">
              <Card
                className="card-lift--hover shadow border-0"
                style={{
                  padding: 0,
                }}
              >
                <Link href="/profile-page">
                  <Image
                    className="img-fluid "
                    style={{}}
                    alt="..."
                    src={require('src/assets/img/theme/profile.jpg')}
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://twitter.com/creativetim"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href="https://www.facebook.com/creativetim"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="dribbble"
                href="https://dribbble.com/creativetim"
                id="tooltip829810202"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-dribbble" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="github"
                href="https://github.com/creativetimofficial"
                id="tooltip495507257"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()}{' '}
                <a
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                  >
                    MIT License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default CardsFooter;
