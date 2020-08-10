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
- Create mongodb database called "gamesdb" with the collection "games"
(This can either be empty or prepopulated the structure for a game is as follows)
```
{
    "_id" : ObjectId("5ede365560c3b2b435fcc2a1"),
    "name" : "Final Fantasy 7",
    "image" : "https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg",
    "description" : "Final Fantasy VII[a] is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and became the first in the main series to see a PAL release. The game's story follows Cloud Strife, a mercenary who joins an eco-terrorist organization to stop a world-controlling megacorporation from using the planet's life essence as an energy source. Events send Cloud and his allies in pursuit of Sephiroth, a superhuman who seeks to wound the planet. During the journey, Cloud builds close friendships with his party members, including Aerith Gainsborough, who holds the secret to saving their world.",
    "release_date" : 1997,
    "platform" : "ps1",
    "price" : 30.0
}
```
- Run mongodb
- Run `npm run server` - will run on port 4000 (you can query graphQL directly from http://localhost:4000/graphql)
- Run `npm run client` - this will open in http://localhost:3000/ and show the application.
- Currently you can add, remove / update games to the database and also search for the added games based on search input

