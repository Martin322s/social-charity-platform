## Social Charity Platform – WINK
Web application (SPA) using ReactJS for the client side, NodeJS (Express) for the back end and MongoDB with mongoose for data management. The application dynamically chnages content, based on user iteraction and supports user profiles and CRUD operations using a REST service.

## Overview
Single Page App for sharing charity causes. The application allows visitors to browse through different publications. Users may register with user information, email and password, which allows them to create their own publications. Creators can also edi and delete their own sharings at any time.

## Technical Details
The application have following resources:
- Project scaffold: A package.json file, containing list of common dependencies. 
- Components for every endpoint of the application.
To start the application, execute the command “npm install” via the command-line terminal.
- Local REST Service: A special server, which contains sample data and support user registration and CRUD operations via REST requests is included with the project.

## Application Endpoints
- Navigation bar – links will correctly change the current page (view). Guests can see the links to the publications, sign in and sign up. The logged in user navbar will contain the links to the publications, the create page, profile page and logout action.

- Sign in – contains a form for existing user authentication. By providing a email and password, the app will login user, if there are no empty fields. Login functionalty will send POST request to the correct endpoint with email and password with correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful login the user will be redirected to the home page. If there is empty fields, alert notification will be displayed.

- Sign up – the page contains a form for new user registration. By providing a first anme, last name, email and password, the app will register a new user in the system, if there are no empty fields.
Register functionalty will send POST request to the correct endpoint with names, email and password with correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful register the user will be redirected to the home page with requiring login. If there is empty fields, alert notification will be displayed.

- Logout – The logout action is available to logged in users. It perform GET request to the correct endpoint, with access token sent in the required headers. Any session information will be cleared.

- Home page – All users will be welcomed by the Home page, where they can naviagate to the other views.

- Publications Page – The page displays a list of all publications in the system. Details button is available to the logged in users and clicking on the button, leads to the details page for the selected cause.

- Create Publication – The create page is available to logged in users. It contains a form for creating new causes. All fields must me filled before create it. Creating fuctionalty sends POST request to the correct endpoint with required headers – data and access token. The service will return the newly created record. Upon success, the user will be redirected to the publications page.

- Details Page – The logged in users are able to view details about publications. Clicking the Details link in the view will display the page. If the currently logged in user is the creator of the publication, the Edit and Delete buttons will be displayed.

- Profile Page – The page show the user names, email and all created publications made by the current user:

- Edit publication page – The edit page is available to logged in users and it allows author to edit their own publication. Clicking the Edit link will display the edit page. It contains a form with input fields for all relevant properties. All fields must be filled before sending the information.

The service will return the modified record. Upon success the user will be redirected to the publications page.
- Delete Publication – The delete action is available to the logged in users, for publication that they created. When the author clicks on the Delete button on any of his publications, the publication will be deleted from the system. The service will return an object, containing the deletion time. Upon success, the user will be redirected the user to publications page.
