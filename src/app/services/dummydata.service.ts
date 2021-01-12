import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummydataService {
  constructor() {}
  data = [
    {
      type: false,
      date: '1988-12-14',
      name: 'Haiti',
      'email uses current data': 'Haiti@gmail.com',
      'email from expression': 'Haiti@yopmail.com',
      companies: [
        {
          index: 0,
          name: 'Karina',
        },
        {
          index: 1,
          name: 'Tina',
        },
        {
          index: 2,
          name: 'Talya',
        },
      ],
    },
    {
      type: true,
      date: '1989-11-16',
      name: 'Gabon',
      'email uses current data': 'Gabon@gmail.com',
      'email from expression': 'Gabon@yopmail.com',
      companies: [
        {
          index: 0,
          name: 'Darlleen',
        },
        {
          index: 1,
          name: 'Fanchon',
        },
        {
          index: 2,
          name: 'Tabbatha',
        },
      ],
    },
    {
      type: true,
      date: '1984-07-29',
      name: 'Comoros',
      'email uses current data': 'Comoros@gmail.com',
      'email from expression': 'Comoros@yopmail.com',
      companies: [
        {
          index: 0,
          name: 'Elise',
        },
        {
          index: 1,
          name: 'Julieta',
        },
        {
          index: 2,
          name: 'Ira',
        },
      ],
    },
    {
      type: false,
      date: '1995-05-01',
      name: 'Chad',
      'email uses current data': 'Chad@gmail.com',
      'email from expression': 'Chad@yopmail.com',
      companies: [
        {
          index: 0,
          name: 'Aurelie',
        },
        {
          index: 1,
          name: 'Janenna',
        },
        {
          index: 2,
          name: 'Ekaterina',
        },
      ],
    },
    {
      type: true,
      date: '1990-05-26',
      name: 'Zambia',
      'email uses current data': 'Zambia@gmail.com',
      'email from expression': 'Zambia@yopmail.com',
      companies: [
        {
          index: 0,
          name: 'Deedee',
        },
        {
          index: 1,
          name: 'Ardenia',
        },
        {
          index: 2,
          name: 'Marcy',
        },
      ],
    },
    {
      type: false,
      date: '1999-12-23',
      name: 'Anguilla',
      'email uses current data': 'Anguilla@gmail.com',
      'email from expression': 'Anguilla@yopmail.com',
      companies: [
        {
          index: 0,
          name: 'Kassey',
        },
        {
          index: 1,
          name: 'Almeta',
        },
        {
          index: 2,
          name: 'Jinny',
        },
      ],
    },
  ];
}
