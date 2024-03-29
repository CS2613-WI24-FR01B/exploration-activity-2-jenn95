# **EA2: Jest Demo Application**

## **Package/Library Demonstrated**
Using Jest, a framework for JavaScript testing, I built a few tests to demonstrate the benefits that Jest can offer a project to help ensure correctness of code as the project evolves. 

## **Running the Application**
To run the application, you will need to install node and npm. You can check if these are installed from the command line:
```
$ node -v
$ npm -v
```
To install node, please visit https://nodejs.org/ and follow the instructions to download and install. 

To install npm after installing node:
```
$ node install -g npm
```

Now, nagivating to the project folder in the command line, you should able to run the tests:
```
$ npm test
```
This will run the script in package.json. There are some CLI options selected to automatically run on this script to display details and test coverage of the codebase. Additional information and more Jest CLI options can be found here: https://jestjs.io/docs/cli


## **Purpose of Application**
The purpose of the application is to test the javascript programs I have written. In writing these tests, by going over the program requirements to create the tests, I actually caught an error in my program. I have left this original function and the method call to this in the test suite, but have commented it out. Removing the comments will show what information Jest tests provide when a test fails, and how I was able to narrow in on the issue by assesing what tests were passing and what was failing. 

Unit testing is important for maintaining code. Adhering to good coding practices, with functions that have a narrow scope of responsibility it important for being able to write clear and effective programs, as well as creating tests. 


## **Sample Input and Output**
![Screen Shot 2024-03-29 at 1 07 14 PM](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/assets/112823585/3de7b689-20a3-4949-8715-54c041d6ba80)

