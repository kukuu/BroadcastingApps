FlixPremiere WebApp
===================

### Node.js

The application dependencies are handled with the Node Package Manager [npm modules](https://www.npmjs.com).
Both Node.js and `npm` have to be installed to run the application.

Download and install the latest `0.12.x` version of Node.js from the [Node.js website](http://nodejs.org/download).


### Global npm installs

[Gulp](http://gulpjs.com) and [Bower](http://bower.io) are used to install client dependencies and to build.
It is convenient to have them installed globally:

`$ npm install -g gulp`
`$ npm install -g bower`


### Vagrant VM setup

*Note: This is not relevant for this project yet, but left here for reference and since it will be later.*

Installing databases for development on your native machine is no fun. Instead the project is set up to 
automatically install and configure databases in a VM managed with Vagrant.

##### Step 1

Download and install:

  * [Virtual Box](https://www.virtualbox.org/wiki/Downloads) (if you do not have VMWare or Virtual Box installed)
  * [Vagrant](https://www.vagrantup.com/downloads.html)

**On Windows hosts:** Install the [Win-NFSD plugin](https://github.com/GM-Alex/vagrant-winnfsd) from 
the command line in your project folder to enable NFS support for Windows hosts which is much faster than the 
default Virtual Box file system drivers: 

`$ vagrant plugin install vagrant-winnfsd`

##### Step 2

The VM is configured using the [Puppet Server Management](https://puppetlabs.com) tool. It relies on puppet
modules which are included as git sub-modules. Install these by running:

`$ git submodule init`  
`$ git submodule update`

##### Step 3

Start up your VM with the following command which will download the VM image, boot it up and
configure the environment (install all dbs and other tools) the first time (it takes a while,
go get a coffee):

`$ vagrant up`

The Vagrant VM is controlled from the commandline with commands typed in the
project root folder:

  * `vagrant up` - Boots up the VM and sets up the environment.
  * `vagrant ssh` - SSH into the VM from the command line.
  * `vagrant halt` - Shuts the VM down. (The command to use in most cases)
  * `vagrant destroy` - Completely removes the VM from the system.


### SDKs for npm build dependencies

*Don't bother installing these unless you find the `npm install` breaking.*

Some `npm` package rebuilds from source. For this Visual Studio might be required. Download the [Express
version for Windows 7/8](http://go.microsoft.com/?linkid=9816758).

Install Python v2.7 to accommodate further `npm` rebuilds as necessary.


### Install dependencies

Install the Node and Bower dependencies of the application from the commandline in the project folder:

`$ npm install`
`$ bower install`


### Builds, Watching and Live Reload

*Note: There will be some changes in the build scripts, but this works for now.*

To build and open the app locally for development simply run:

`gulp`

For linting `eslint` is used. I runs along with the initial build, and incrementally as files are changed.
To run it as a stand-alone task, run:

`gulp lint`

To build for production run:

`gulp build:dist`

Then commit the two minified files to the master branch to be pulled on the server.
