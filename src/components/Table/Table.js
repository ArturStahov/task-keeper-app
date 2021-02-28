import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarPlus,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

import tableTemplate from '../../template/table-template.json';

import {
  Table,
  Td,
  Th,
  Wrapper,
  ButtonInfo,
  ButtonAdd,
} from './StyledComponent';

export default function Tables() {
  const [active, setActive] = useState(false);
  const [idItem, setIdItem] = useState('');

  let classButtonAdd = 'button-add';

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Mon</Th>
            <Th>Tue</Th>
            <Th>Wed</Th>
            <Th>Thu</Th>
            <Th>Fri</Th>
          </tr>
        </thead>
        <tbody>
          {tableTemplate.time.map(time => (
            <tr key={time}>
              <Td className="row-title">{time}:00</Td>
              {tableTemplate.day.map(day => (
                <Td
                  className="td-events"
                  key={day}
                  activated={`${day}${time}` === idItem && active}
                >
                  <ButtonAdd
                    onClick={() => {
                      setActive(true);
                      setIdItem(`${day}${time}`);
                    }}
                    className={classButtonAdd}
                    type="button"
                    activated={`${day}${time}` === idItem && active}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarPlus}
                      size="2x"
                      color="#28506F"
                    />
                  </ButtonAdd>
                  <ButtonInfo
                    className="button-info"
                    type="button"
                    activated={`${day}${time}` === idItem && active}
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      size="2x"
                      color="#ff8500"
                    />
                  </ButtonInfo>
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
