const names = ['alice', 'bob', 'charlie'];

// const uppercasedNames = names.map(name => name.toUpperCase());
// console.log(uppercasedNames);

const capitalStartNames = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(capitalStartNames);