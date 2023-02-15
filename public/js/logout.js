document.querySelector('#logout').addEventListener('click', logout);

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if(response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
};

