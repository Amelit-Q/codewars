function countSheep(arrayOfSheep) {
  const count = arrayOfSheep.filter(Boolean).length;
  return console.log(`There are ${count} sheeps in total`);
}

// used filter for array of true/false values
