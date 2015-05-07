# assemble.io-boilerplate
boilerplate for assemble.io built applications

## Installation

Clone as the project name by running the following command:

    $ git clone git@github.com:rskwiat/assemble.io-boilerplate.git myapp

CD into folder

    $ cd myapp

Install all NPM dependencies

    $ npm install

Grunt build will create the application and copy over the assets files into a public folder which will host your application. The location can be changed in the src/data/site.json file.

    $ grunt build

Serving locally for building the site locally.

    $ grunt serve

### Settings

All settings are contained in the 'src/data/site.json' file. Please note that this file has to be saved as site.json This file contains the basic global settings for all applications, copyright year, location of templates, partials etc.

### Production Setting

Site production will echo out true or false depending on a setting in the Gruntfile, used with handlebars templating so Analytics / tracking will only fire on production and not local.

##### Todos - Build step
* Add in SASS Functionality
* JS Minification


Built off of [Assemble.io Boilerplate](https://github.com/assemble/boilerplate-site)
