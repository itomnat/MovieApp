function authenticate(e) {
    e.preventDefault();
    
    fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        if(data.access){
            localStorage.setItem('token', data.access);
            retrieveUserDetails(data.access);
            Swal.fire({
                title: "Login Successful",
                icon: "success",
                text: "Welcome to The Movie Hub!",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                title: "Authentication failed",
                icon: "error",
                text: data.message || "Check your login details and try again."
            });
        }
    })
    .catch(error => {
        console.error('Login error:', error);
        Swal.fire({
            title: "Connection Error",
            icon: "error",
            text: "Please check your internet connection and try again."
        });
    });
    
    setEmail('');
    setPassword('');
}