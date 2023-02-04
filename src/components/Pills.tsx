import { useState } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import { Col, Nav, NavItem, NavLink } from 'reactstrap';

const Pills = () => {
  const [state, setState] = useState<any>({
    circledNavPills: 1,
  });
  const toggleNavs = (e: any, key: string, index: number) => {
    e.preventDefault();
    setState({ ...state, [key]: index });
  };

  return (
    <>
      <Col lg="5">
        <h3 className="h4 text-success font-weight-bold mb-5">
          Navigation Pills
        </h3>
        <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
          <NavItem>
            <NavLink
              aria-selected={state.circledNavPills === 1}
              className={classnames('rounded-circle', {
                active: state.circledNavPills === 1,
              })}
              onClick={(e) => toggleNavs(e, 'circledNavPills', 1)}
              href="#pablo"
              role="tab"
            >
              <span className="nav-link-icon d-block">
                <i className="ni ni-atom" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={state.circledNavPills === 2}
              className={classnames('rounded-circle', {
                active: state.circledNavPills === 2,
              })}
              onClick={(e) => toggleNavs(e, 'circledNavPills', 2)}
              href="#pablo"
              role="tab"
            >
              <span className="nav-link-icon d-block">
                <i className="ni ni-chat-round" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={state.circledNavPills === 3}
              className={classnames('rounded-circle', {
                active: state.circledNavPills === 3,
              })}
              onClick={(e) => toggleNavs(e, 'circledNavPills', 3)}
              href="#pablo"
              role="tab"
            >
              <span className="nav-link-icon d-block">
                <i className="ni ni-cloud-download-95" />
              </span>
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </>
  );
};

export default Pills;
