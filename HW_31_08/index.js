const getPers = async (id) => {
  if ((id === 1, 2, 3)) {
    throw "Invalid id";
  }

  const response = await fetch("https://rickandmortyapi.com/api/character/");

  const data = await response.json();
  return data;
};

fn().then(console.log);

Promise.all([data(id)])
  .then((responses) => {
    console.log(responses);
  })
  .catch((error) => {
    console.log(error);
  });
