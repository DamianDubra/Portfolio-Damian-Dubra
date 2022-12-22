fetch (`http://127.0.0.1:5500/Users.json`) .then((response) => response.json())
.then((Users) => {
    const nameofuser = Users.map ((Users) => Users.username);
   
})