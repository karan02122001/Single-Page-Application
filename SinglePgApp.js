function loadPage(page) {
    const contentDiv = document.getElementById('content')

    if(page === 'home') {
        contentDiv.innerHTML = `
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content</p>
        `;
    } else if (page === 'about') {
        contentDiv.innerHTML = `
        <h2>About Us </h2>
        <p>Learn more about our Company and Team </p>
        `;
    } else if (page === 'contact') {
        contentDiv.innerHTML = `
        <h2>Contact Us </h2>
        <p>Feel free to get in touch with us</p>
        `;
    } else if (page === 'menu') {
        contentDiv.innerHTML = `
        <h2>Menu Page</h2>
        <p>See more in Menu Page</p>
        `;
    } 
}
