-> all my pages will be behind login page - does it still make sense to then authorize all pages with a token request? Best practice?
---> yes 'if no token then redirect to login page with history hook.'
---> put this in every component
---> you could bring this into app.js to have it umbrella over the entire app.
-------> this could break with login and sign up though.
