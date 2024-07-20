// Add your code here

function submitData(name,email){
    const dataUser = {
        name:name,
        email:email
    }

    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body:JSON.stringify(dataUser)
    })
        .then(res => res.json())
        .then(dataUser => { // Assuming the response returns an object with an `id` property
            const userId = dataUser.id;

      // Append the userId to the DOM
      const userIdElement = document.createElement('p');
      userIdElement.textContent = `${userId}`;
      document.body.appendChild(userIdElement);
      return userId;

    })
        .catch(error => {
           console.error('FetchError:', error);
    
         // Create an error message element
        const errorElement = document.createElement('p');
            errorElement.textContent = `Error: ${error.message}`;
             errorElement.style.color = 'red'; // Optional: Apply styles to distinguish errors
                document.body.appendChild(errorElement);
    });        
}

console.log(submitData());