# Flexbox Playground

This is project to demonstrate the capabilities of the CSS3 Flexbox Layout.

## Prerequisites

In order to build this project you need to have Node.js and npm (Node Package Manager) installed on your system. You can download them from [here](https://nodejs.org/download/) and follow this [install instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

To compile the Sass source to CSS, you'll need Ruby, Sass and Compass. To install Ruby follow this [guide](https://www.ruby-lang.org/en/documentation/installation/), for Sass [this](http://sass-lang.com/install), and for Compass refer to [this guide](http://compass-style.org/install/).

In some cases when installing node packages you'll need [Python 2.7](https://www.python.org/downloads/) and [C++ Libraries](https://support.microsoft.com/en-us/kb/2977003) (Windows) to build them.

Note that these executables need to be accessed from command line, so make sure they're added in the environment path. On Linux and Mac they're automatically added to the path, and for Windows you may need to follow this [instructions](http://www.computerhope.com/issues/ch000549.htm), just be careful not to mess the existing path value.

## Setup

First install gulp command line tool globally with:

`npm install --global gulp`

And from the project's root install the dependencies with:

`npm install`

After it's done, this will attempt to run `bundle` in the current dir to install the `compass` gem defines as a dependency in the `Gemfile`. Without the Ruby `compass` gem, `gulp build` will fail.

## Build

To build the code just run `gulp` from the command line. This will produce functional version in the `dist` folder.

## License
This source code is under [MIT license](https://github.com/imjustd/flexbox-playground/blob/master/LICENSE).
