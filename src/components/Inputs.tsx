import classnames from 'classnames';
import { useState } from 'react';

import {
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from 'reactstrap';

const Inputs = () => {
  const [state, setState] = useState({
    birthdayAltFocused: true,
    searchFocused: false,
    birthdayFocused: false,
    searchAltFocused: false,
  });

  return (
    <>
      <section className="section pb-0 section-components">
        <Container className="mb-5">
          {/* Inputs */}
          <h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              Form controls
            </small>
          </div>
          <Row>
            <Col lg="4" sm="6">
              <FormGroup>
                <Input placeholder="Regular" type="text" />
              </FormGroup>
              <FormGroup
                className={classnames({
                  focused: state.searchFocused,
                })}
              >
                <InputGroup className="mb-4">
                  <InputGroupText>
                    <i className="ni ni-zoom-split-in" />
                  </InputGroupText>
                  <Input
                    placeholder="Search"
                    type="text"
                    onFocus={(e) => setState({ ...state, searchFocused: true })}
                    onBlur={(e) => setState({ ...state, searchFocused: false })}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg="4" sm="6">
              <FormGroup>
                <Input disabled placeholder="Regular" type="text" />
              </FormGroup>
              <FormGroup
                className={classnames({
                  focused: state.birthdayFocused,
                })}
              >
                <InputGroup className="mb-4">
                  <Input
                    placeholder="Birthday"
                    type="text"
                    onFocus={(e) =>
                      setState({ ...state, birthdayFocused: true })
                    }
                    onBlur={(e) =>
                      setState({ ...state, birthdayFocused: false })
                    }
                  />

                  <InputGroupText>
                    <i className="ni ni-zoom-split-in" />
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg="4" sm="6">
              <FormGroup className="has-success">
                <Input className="is-valid" placeholder="Success" type="text" />
              </FormGroup>
              <FormGroup className="has-danger">
                <Input
                  className="is-invalid"
                  placeholder="Error Input"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <div className="py-5 bg-secondary">
          <Container>
            {/* Inputs (alternative) */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Form controls (alternative)
              </small>
            </div>
            <Row>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Regular"
                    type="text"
                  />
                </FormGroup>
                <FormGroup
                  className={classnames({
                    focused: state.searchAltFocused,
                  })}
                >
                  <InputGroup className="input-group-alternative mb-4">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>

                    <Input
                      placeholder="Search"
                      type="text"
                      onFocus={(e) =>
                        setState({ ...state, searchAltFocused: true })
                      }
                      onBlur={(e) =>
                        setState({ ...state, searchAltFocused: false })
                      }
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    disabled
                    placeholder="Regular"
                    type="text"
                  />
                </FormGroup>
                <FormGroup
                  className={classnames({
                    focused: state.birthdayAltFocused,
                  })}
                >
                  <InputGroup className="input-group-alternative mb-4">
                    <Input
                      placeholder="Birthday"
                      type="text"
                      onFocus={(e) =>
                        setState({ ...state, birthdayAltFocused: true })
                      }
                      onBlur={(e) =>
                        setState({ ...state, birthdayAltFocused: false })
                      }
                    />

                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-alternative is-valid"
                    placeholder="Success"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-alternative is-invalid"
                    placeholder="Error Input"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Inputs;
