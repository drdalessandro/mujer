// REEMPLAZAR COMPLETAMENTE: src/helpers/get-timing-repeat.ts

import { TimingRepeat } from '@medplum/fhirtypes';

const getTimingRepeat = (repeat?: TimingRepeat): string => {
  if (!repeat) {
    return 'No instruction provided';
  }
  
  const { frequency, period, periodUnit } = repeat;
  
  // Mapeo de unidades según FHIR R4
  let singularUnit = 'day';
  let pluralUnits = 'days';
  
  switch (periodUnit) {
    case 'wk':
      singularUnit = 'week';
      pluralUnits = 'weeks';
      break;
    case 'd':
      singularUnit = 'day';
      pluralUnits = 'days';
      break;
    case 'h':
      singularUnit = 'hour';
      pluralUnits = 'hours';
      break;
    case 'min':
      singularUnit = 'minute';
      pluralUnits = 'minutes';
      break;
    case 'mo':
      singularUnit = 'month';
      pluralUnits = 'months';
      break;
    case 'a':
      singularUnit = 'year';
      pluralUnits = 'years';
      break;
    case 's':
      singularUnit = 'second';
      pluralUnits = 'seconds';
      break;
    default:
      singularUnit = 'day';
      pluralUnits = 'days';
  }

  return `${frequency} ${frequency === 1 ? 'application' : 'applications'} per 
    ${period} ${period === 1 ? singularUnit : pluralUnits}`;
};

export default getTimingRepeat;
