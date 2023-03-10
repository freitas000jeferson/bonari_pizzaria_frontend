import classnames from 'classnames';
import { useState } from 'react';

import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

const TabsSection = () => {
  const [state, setState] = useState<any>({
    iconTabs: 1,
    plainTabs: 1,
  });
  const toggleNavs = (e: any, key: string, index: number) => {
    e.preventDefault();
    setState({
      ...state,
      [key]: index,
    });
  };

  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
      <Row className="justify-content-center">
        <Col lg="6">
          {/* Tabs with icons */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              With icons
            </small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={state.iconTabs === 1}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: state.iconTabs === 1,
                  })}
                  onClick={(e) => toggleNavs(e, 'iconTabs', 1)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-cloud-upload-96 mr-2" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={state.iconTabs === 2}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: state.iconTabs === 2,
                  })}
                  onClick={(e) => toggleNavs(e, 'iconTabs', 2)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-bell-55 mr-2" />
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={state.iconTabs === 3}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: state.iconTabs === 3,
                  })}
                  onClick={(e) => toggleNavs(e, 'iconTabs', 3)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-calendar-grid-58 mr-2" />
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={'iconTabs' + state.iconTabs}>
                <TabPane tabId="iconTabs1">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="iconTabs2">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="iconTabs3">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
        <Col className="mt-5 mt-lg-0" lg="6">
          {/* Menu */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">With text</small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={state.plainTabs === 1}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: state.plainTabs === 1,
                  })}
                  onClick={(e) => toggleNavs(e, 'plainTabs', 1)}
                  href="#pablo"
                  role="tab"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={state.plainTabs === 2}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: state.plainTabs === 2,
                  })}
                  onClick={(e) => toggleNavs(e, 'plainTabs', 2)}
                  href="#pablo"
                  role="tab"
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={state.plainTabs === 3}
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: state.plainTabs === 3,
                  })}
                  onClick={(e) => toggleNavs(e, 'plainTabs', 3)}
                  href="#pablo"
                  role="tab"
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={'plainTabs' + state.plainTabs}>
                <TabPane tabId="plainTabs1">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="plainTabs2">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="plainTabs3">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TabsSection;
