// Remember, we're gonna use strict mode in all scripts now!

////////////////////////////

// follow this prettier website
//prettier.io/

//////////////////////////

// video: 55: Setting up prettier and vs code
/*

-- first go to extension and install prettier then go to settings (follow youtube video) or these video and fix javascript format on settings 

--to use ('') single quote in js open a file (.prettierr.c) and 
--put singleQuote : true; and

-- if there is only one parameter in function give no bracket thats why give these command
"arrowParens": "avoid";


{
  "singleQuote": true,
  "arrowParens": "avoid"
}


*/
https: 'use strict';

const x = '23';
if (x === 23) console.log(23);

if (x === 23) {
}
//-- if there is only one parameter in function give no bracket thats why give these command
// "arrowParens": "avoid";

const calcAge = birthYear => 2037 - birthYear;

/*
to create shortcut for (console.log) => (cl)
go to vs code => code  => preferences => configure user snippets / user snippets => open a search option click there and select (new global snippets file) and type any name like (jonas) there and (enter) => will open a file like (jonas.code-snippets) and we can add any shortcut snippet there (console.log) er shortcut e ja type korbo prefix e tai boshabo.

// Example:

	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "cl",
		"body": ["console.log();"],
		"description": "Log output to console"
	}
*/
// cl
console.log(calcAge);

console.log('');
console.log();

// 2. another extention is (ESlint, image previewer for html,  Monokai pro for theme color, settings sync, todo highlight - highlight text see youtube video how to enable it or in this video )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 56: Installing Node.Js, and setting up a dev environment

/*
// extensions : Live server  -- in vs code => go live

// install node.js
https://nodejs.org/en/download


// clear the terminnal (command + k)

// open vs code terminal -- node -v (check the node version)
-- sudo npm install live-server -g (that will make the live server tool globally)  enter;
-- give the password of pc.
-- live server
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 57: learning how to code
