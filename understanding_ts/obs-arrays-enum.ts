enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

// const person: {
//     // key : type values
//     name: string;
//     age: number;
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
