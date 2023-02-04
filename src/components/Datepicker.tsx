import { useState } from 'react';
import ReactDatetime from 'react-datetime';

// reactstrap components
import { Col, FormGroup, InputGroup, InputGroupText, Row } from 'reactstrap';

const Datepicker = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleReactDatetimeChange = (who: any, date: any) => {
    if (
      date.startDate &&
      who === 'endDate' &&
      new Date(date.startDate._d + '') > new Date(date._d + '')
    ) {
      setDate({
        startDate: date,
        endDate: date,
      });
    } else if (
      date.endDate &&
      who === 'startDate' &&
      new Date(date.endDate._d + '') < new Date(date._d + '')
    ) {
      setDate({
        startDate: date,
        endDate: date,
      });
    } else {
      // setDate({
      //   [who]: date,
      // });
    }
  };
  // this function adds on the day tag of the date picker
  // middle-date className which means that this day will have no border radius
  // start-date className which means that this day will only have left border radius
  // end-date className which means that this day will only have right border radius
  // this way, the selected dates will look nice and will only be rounded at the ends
  const getClassNameReactDatetimeDays = (date: any) => {
    if (date.startDate && date.endDate) {
    }
    if (
      date.startDate &&
      date.endDate &&
      date.startDate._d + '' !== date.endDate._d + ''
    ) {
      if (
        new Date(date.endDate._d + '') > new Date(date._d + '') &&
        new Date(date.startDate._d + '') < new Date(date._d + '')
      ) {
        return ' middle-date';
      }
      if (date.endDate._d + '' === date._d + '') {
        return ' end-date';
      }
      if (date.startDate._d + '' === date._d + '') {
        return ' start-date';
      }
    }
    return '';
  };

  return (
    <>
      <h3 className="h4 text-success font-weight-bold mt-md mb-4">
        Datepicker
      </h3>
      <Row>
        <Col md="4">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Single date
          </small>
          <FormGroup>
            <InputGroup>
              <InputGroupText>
                <i className="ni ni-calendar-grid-58" />
              </InputGroupText>
              <ReactDatetime
                inputProps={{
                  placeholder: 'Date Picker Here',
                }}
                timeFormat={false}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col className="mt-4 mt-md-0" md="8">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Date range
          </small>
          <Row>
            <Col sm={6} xs={12}>
              <FormGroup>
                <InputGroup>
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                  <ReactDatetime
                    inputProps={{
                      placeholder: 'Start Date',
                    }}
                    value={date.startDate}
                    timeFormat={false}
                    onChange={(e) => handleReactDatetimeChange('startDate', e)}
                    renderDay={(props, currentDate, selectedDate) => {
                      let classes = props.className;
                      classes += getClassNameReactDatetimeDays(currentDate);
                      return (
                        <td {...props} className={classes}>
                          {currentDate.date()}
                        </td>
                      );
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col sm={6} xs={12}>
              <FormGroup>
                <InputGroup>
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>

                  <ReactDatetime
                    inputProps={{
                      placeholder: 'End Date',
                    }}
                    className="rdtPickerOnRight"
                    value={date.endDate}
                    timeFormat={false}
                    onChange={(e) => handleReactDatetimeChange('endDate', e)}
                    renderDay={(props, currentDate, selectedDate) => {
                      let classes = props.className;
                      classes += getClassNameReactDatetimeDays(currentDate);
                      return (
                        <td {...props} className={classes}>
                          {currentDate.date()}
                        </td>
                      );
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Datepicker;
