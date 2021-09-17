import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.js';
export default ({from,to}) =>{
  const fromDate=  DateTime.fromISO(from);
  const toDate = DateTime.fromISO(to);
  
  const result= toDate.diff(fromDate,['years','month','days']).toObject();
  return result;

}