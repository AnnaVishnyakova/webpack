import {
  DateTime
} from 'luxon';
export default ({
  from,
  to
}) => {
  const fromDate = DateTime.fromISO(from);
  const toDate = DateTime.fromISO(to);

  const result = toDate.diff(fromDate, ['years', 'months', 'days']).toObject();
  return result;

}