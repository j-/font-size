import { Unit } from './units';
import { convert } from './convert';

test.each`
  a       | fromUnit   | b       | toUnit
  ${0}    | ${Unit.PX} | ${0}    | ${Unit.PX}
  ${0}    | ${Unit.MM} | ${0}    | ${Unit.PX}
  ${0}    | ${Unit.Q}  | ${0}    | ${Unit.PX}
  ${0}    | ${Unit.CM} | ${0}    | ${Unit.PX}
  ${0}    | ${Unit.IN} | ${0}    | ${Unit.PX}
  ${0}    | ${Unit.PT} | ${0}    | ${Unit.PX}
  ${0}    | ${Unit.PC} | ${0}    | ${Unit.PX}
  ${1}    | ${Unit.IN} | ${96}   | ${Unit.PX}
  ${1}    | ${Unit.PC} | ${12}   | ${Unit.PT}
  ${1}    | ${Unit.PC} | ${16}   | ${Unit.PX}
  ${1}    | ${Unit.IN} | ${72}   | ${Unit.PT}
  ${96}   | ${Unit.PX} | ${72}   | ${Unit.PT}
  ${127}  | ${Unit.CM} | ${4800} | ${Unit.PX}
  ${127}  | ${Unit.MM} | ${480}  | ${Unit.PX}
  ${127}  | ${Unit.Q}  | ${120}  | ${Unit.PX}
  ${127}  | ${Unit.Q}  | ${120}  | ${Unit.PX}
  ${4800} | ${Unit.PX} | ${1270} | ${Unit.MM}
  ${1270} | ${Unit.MM} | ${5080} | ${Unit.Q}
  ${5080} | ${Unit.Q}  | ${127}  | ${Unit.CM}
  ${127}  | ${Unit.CM} | ${50}   | ${Unit.IN}
  ${50}   | ${Unit.IN} | ${3600} | ${Unit.PT}
  ${3600} | ${Unit.PT} | ${300}  | ${Unit.PC}
  ${300}  | ${Unit.PC} | ${4800} | ${Unit.PX}
`('$a$fromUnit = $b$toUnit', ({ a, b, fromUnit, toUnit }) => {
  expect(convert(fromUnit, toUnit, a)).toBeCloseTo(b);
});
