Read List
====

# Description
This utilizes a full-stack to display lists of books that one has or has yet to read. The user has the ability to add (Create) new books to the list, which get entered in a persistent database, see/view (Read) the current books on display or that have just been added, modify (Update) books by moving them from an un-read to a read list, and maybe in the future remove (Delete) books from the list and database entirely.

The key words noted in this explanation Creat, Read, Update, and Delete, otherwise known as "CRUD", serves the essentials of what any one person would wish to do on a webpage. It is essentially how we interact with eveything on the web. Think about Facebook, Twitter, and even message boards.

This is all possible through a full-stack application. Full-stack is in reference to there being some persistent database that is incommunication with the backend server that also interacts with the clients requests to interact with that information, think CRUD.

Let's discuss exactly how a full-stack application works.

----

# What's Inside??

This app is full of lots of different directories and files, lets examine them in alpha order.

<b>config-</b>
The config directory contains the connection.js file and an orm.js file. 
The connection file connects the database to a server so that the information can be accessed wile the orm file creates functions for our sql queries.

<b>controller-</b>
In the controller directory there is a js file that deals with the routes that will be requested. This helps get the proper information into, from, updated, or removed from the database.

<b>db-</b>
The db directory contains our schema and seeds for the database used in the app. The seeds are not always necessary, but populating the database beforehand can be helpful for testing.

<b>models-</b>
The models directory contains a "model" very similar to a constructor for our orm functions. The orm is exported to this file and able to be referenced as such. Then, the models will be exported to our controller to handle the route requests.

<b>public-</b>
In the public folder you can find various miscellaneous assets. In this app, the CSS files live here and there is a directory for images that was never used. Often you can find other js files in here that handle client-side requets or other html files if the developer isn't using a tool like...

<b>views-</b>
HANDLEBARS files live in the views directory, with the main file always being in a layout directory that is a child of the views folder. These files can act as templates for html and be called by the controller to return the information that is being requested using 'res.render('name') where the 'name' is the [name].handlebars part of the handlebars file.

<b>server.js-</b>
Lonely in the root sits the server.js file which will allow us to use express among other things and establish solid connection to the web.


# Improvements
Parsing through this app there could be several improvements made.

I was unable to successfully "update" the book lists. This could be because the query I used was incorrect. However, given a proper update query and server-side put request, there only need be a client-side ajax request that when a button is clicked upon the ID ascribed to the item is used to locate in the database and change its boolean value. The boolean value is what determines which column the book resides, so this would solution would allow for the movement of these `<li>` items.

Delete functionality could also be added to remove books from either list.

As can be seen in the main.handlebars file there is a bootstrap cdn linked. This allows you to use bootstrap in any handlebars file so, given more time more formatting using this css framework would have been possible.

Additionally there is a regular CSS file linked to the main.handlebars file as well. Given more time I would have been able to dress up the app using some good old homebrewed CSS as well.

Finally, the Heroku deployment may not be working as you initally read this. This is a work in progress and the README will be updated with when this is fixed and the specific cause of the error so this can be avoided by users and developers in the future.

----

# Project Link
[Deployed Heroku App](https://obscure-dusk-79379.herokuapp.com/) <br>
[Project Repository](https://github.com/spenrad/Read-List) <br>

----

# Author
Spencer Christy<br>
[GitHub](https://github.com/spenrad)<br>
[LinkedIn](https://www.linkedin.com/in/spencer-christy-543b84b3/)<br>