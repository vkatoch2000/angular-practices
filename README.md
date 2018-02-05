ANGULAR 4.0
Version 1.0




    













IDE: Atom
Created by – Vivek Katoch
Jsonplaceholder.typicode.com







1.	Install Node JS

Node JS provides run time environment that executes JavaScript code outside browser.
Download latest version of nodejs from https://nodejs.org/en/
We install it because angular uses its tools for creating project.
It provides browser sync functionality
Installing third party angular command line interface library using command
	npm install –g @angular/cli
where npm = node package manager
              g = global [install for all users of computer]
	ng -version


2.	Create Angular project 
	ng new <project-name> “courseshoppingcart”
	ng serve [run project on port 4200 using web pack]
Web pack inject bundle js libraries in index.html at run time

3.	Install Type Script package
	npm install –g typescript [object oriented, support compile time error]
Verify typescript package version using command
	tsc --version

4.	Install Browser Sync package
	npm install –g browser-sync
	browser-sync --version

5.	Create Component inside angular project
	cd <project-dir-name>
	ng g c <component-name> “course”

6.	Create Service in angular
	ng g s <service-name>
     



References:



           
