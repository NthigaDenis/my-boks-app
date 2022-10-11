:root {
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #00333f;
    --black: #030416;
    --white: #f1f1f1;
    --grey: #d6e2e7;
    --dark-grey: #7f8a8e;
    --yellow: #f9c51a;
    --orange: #ff5c00;
    --fuschia: #e80352;
    --blue: #338fff;
    --blue-dark: #145cb3;
    --purple: #cda2ff;
    --green: #00ef7c;
    --color: var(--white);
    --background: var(--black);
    /* background-color: black; */
    --primary: var(--turquoise);
    
  }
  
  /* layout */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Fira Code", monospace;
    font-size: 16px;
    color: var(--color);
    background-color: var(--background);
    
  }
  
  .App {
    color: var(--color);
    background-color: mediumaquamarine;
    min-height: 100vh;
    
  }
  
  .App.light {
  
    color: darkkhaki;
    background-color: #00333f;
    --primary: var(--mid-turquoise);
    
  }
  
  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* buttons */
  button {
    padding: 0.5rem 0.75rem;
    border: none;
    font: inherit;
    font-weight: 600;
    color: inherit;
    cursor: pointer;
    color: var(--primary);
    background-color: var(--background);
    border: 2px solid var(--dark-turquoise);
    transition: background-color 0.2s;
  }
  
  button.active,
  button:focus,
  button:hover {
    outline: none;
    color: var(--background);
    background-color: var(--primary);
    border: 2px solid var(--primary);
  }
  
  button:disabled {
    cursor: not-allowed;
    color: var(--dark-grey);
    background-color: var(--grey);
  }
  
  button.blue {
    border: 2px solid var(--blue-dark);
    color: var(--blue);
  }
  
  button.blue.active,
  button.blue:focus,
  button.blue:hover {
    color: var(--white);
    background-color: var(--blue);
    border: 2px solid var(--blue);
  }
  
  /* links */
  a {
    color: var(--color);
    border-bottom: 1px solid var(--color);
    text-decoration: none;
  }
  
  a:hover {
    background-color: var(--blue);
    border-bottom: 1px solid var(--blue);
  }
  
  /* header */
  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  
  header h1 {
    display: flex;
    align-items: center;
  }
  
  .logo {
    color: var(--turquoise);
    font-size: 1.25em;
    font-family: Helvetica;
    margin-right: 0.5rem;
  }
  
  nav {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  
  .navigation * {
    margin: 0 0.5rem;
  }
  
  .branding {
    display: flex;
  }
  
  /* forms */
  .form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    border: 2px solid var(--dark-turquoise);
    padding: 2rem;
  }
  
  .form h3 {
    margin-bottom: 1rem;
  }
  
  input,
  textarea,
  select {
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    transition: all 0.3s;
    border: 2px solid var(--color);
  }
  
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border: 2px solid var(--primary);
  }
  
  .form button[type="submit"] {
    width: 50%;
    cursor: pointer;
  }
  
  /* Filter */
  .filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }
  
  .filter button {
    margin: 0 1rem;
  }
  
  /* cards */
  .cards {
    margin: 0 auto;
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .card {
    max-width: 400px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    border: 2px solid var(--dark-turquoise);
  }
  
  @media screen and (max-width: 588px) {
    .card {
      display: block;
      max-width: inherit;
    }
  }
  
  .card .image {
    max-height: 200px;
    overflow: hidden;
    position: relative;
  }
  
  .card .image img {
    width: 100%;
    height: 175px;
    object-fit: cover;
  }
  
  .card .image .claps {
    color: transparent;
    text-shadow: 0 0 0 var(--turquoise);
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .card .image .claps:focus,
  .card .image .claps:hover {
    color: transparent;
    text-shadow: 0 0 0 var(--color);
  }
  
  .card .details {
    margin: 0.5rem;
  }
  
  .card .details h4 {
    margin: 0.5rem 0;
  }
  
  .card .details p {
    margin: 0.5rem 0;
  }
  
  .card .extra {
    margin-top: auto;
  }
  
  .badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin: 0.25rem;
  }
  .badge.blue {
    background-color: var(--blue);
    border: 2px solid var(--blue-dark);
    color: var(--white);
  }