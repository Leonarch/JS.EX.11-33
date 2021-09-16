const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

const person2 = JSON.spare(JSON.stringify(person1);

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);