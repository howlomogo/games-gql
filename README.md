Simple GraphQL project with local mongo database, React, Apollo (NOT react hooks version).

Games database
User can search for games in database with various filters
Game name (Searchable)
Release date (Searchable dropdown)
Platform (Searchable dropdown)
Description (Not searchable)
Price (Searchable between min and max)

User can add / amend a game to the database


Extensions:
Add user log in
User can save games they like and have a (my list of games)
Add moderator (Only moderator can add games)


Types
- Game
id (This can be created by mongodb)
name (String)
image (String)
description (String)
release date (String)
platform (String)
price (float?)


- User (Will add this in for now let's just have the list be a seperate collection, pointing to the id of the game)


- Listed Games (This will turn into users, with password, username etc and the list, but for now lets just have 1)
listedGames (Array)

- pagination for list view,

To use:
- Install mongodb
- Run 'mongod' - to start mongodb - running on port `:27017`
- Create mongodb db called `gamesdb` with collection `games`
- With schema such as
```
{
    "_id" : ObjectId("5ede365560c3b2b435fcc2a1"),
    "name" : "Final Fantasy 7",
    "image" : "https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg",
    "description" : "Final Fantasy VII[a] is a 1997 role-playing video game...",
    "release_date" : 1997,
    "platform" : "ps1",
    "price" : 30
}
```
- Run `npm run server`
- You can access graphQL on `http://localhost:4000/graphql`
- Run `npm run client`
- You can access client on `http://localhost:3000/`
