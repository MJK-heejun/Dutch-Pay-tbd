import { IDateDto, IHistoryDto } from 'dto'

export default (state:IHistoryDto = null, action:any):IHistoryDto => {
  switch (action.type) {
    case 'GetHistoryByYearMonth':
      return action.payload;
    default:
      return state;
  }
};
