// Add your code here
const submitData = (userName, userEmail) => {
  const newUser = {
    name: userName,
    email: userEmail,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUser),
  };
  return fetch("http://localhost:3000/users", options)
    .then((res) => res.json())
    .then((user) => {
      console.log(user);
      document.body.append(user.id);
    })
    .catch((err) => {
      document.body.append(err.message);
    });
};
submitData("Tomer", "tharari21@gmail.com");
