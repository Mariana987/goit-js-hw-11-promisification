// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
//   а принимала всего два параметра allUsers и userName и возвращала промис.

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };


const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

    resolve(updatedUsers);
  });
};

const logger_2 = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger_2);
toggleUserState(users, 'Lux').then(logger_2);


