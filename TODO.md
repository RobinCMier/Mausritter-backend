===Setting up DB===

V1. init & connect
V2. model & migration user
V3. model & migration sheet
V4. model & migration item
V5. model & migration sheet_items
V6. add all relations
V7. seed user
-- figure out password scramble
V8. seed sheet
V9. seed items
V10. testqueries

===server===

V1. install express etc
V2. set up a server app & listen

3. make routers
   --- user: login & sign up etc
   --- sheet: everything sheet
4. make test endpoints & test
5. make endpoint to sign up
6. make endpoint to log in
7. make endpoint to show homepage

===frontend===

1. set up app & app structure
2. set up user slice in store
3. make reducer for sign up and log in => put the token in store and use it from there, because all the app's pages are behind login anyway
4. make action for sign up
5. make action for log in
6. make pages for sign up and log in
7. route them both to homepage
8. make homepage display sheetnames
