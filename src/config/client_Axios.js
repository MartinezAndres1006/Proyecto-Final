import axios from "axios";

axios.get('http://localhost:8080/productos')
  .then(response => {
     console.log(response.data);
     console.log(response.status);
  })
  .catch(error => {
console.log(error.message);
});

