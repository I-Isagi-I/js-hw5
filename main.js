let users = {};
for (let i = 1; i <= 10; i++) {
  let name = prompt(`Введите имя пользователя ${i}:`);
  let age = prompt(`Введите возраст пользователя ${i}:`);

  users[i] = {
    name: name,
    age: age
  };
}

for (let id in users) {
  let user = users[id];
  console.log(`Пользователь - ${id}`);
  console.log(`Имя - ${user.name}`);
  console.log(`Возраст - ${user.age}`);
  console.log(' ');
}

console.log('Все пользователи:', users);