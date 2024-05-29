import { http, HttpResponse } from 'msw';

export const SUCCESS_RESULT_1 = {
    active: true,
    id: 'STR6270BFGR',
    lanes: '1',
    people: '1',
    price: 220,
    shoes: ['23'],
    when: '2024-05-01 22:50',
};


export const SUCCESS_RESULT_2 = {
  active: true,
  id: "STR1844HFSZ",
  lanes: "1",
  people: "2",
  price: 340,
  shoes: ['33', '44'],
  when: "2024-05-29T12:00",
};

export const handlers = [
    http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
        return HttpResponse.json(SUCCESS_RESULT_1);
    }),
];
//   export const handlers = [
//     http.get('https://jsonplaceholder.typicode.com/todos', () => {
//       return HttpResponse.json(todos);
//     }),
//     http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
//       return HttpResponse.json({ success: true, message: 'Booking sent' });
//     }),
//   ];

//har ändrat https länk till den jag tror det skall vara. Den med GET hittar jag ingen anledning till att ha?
