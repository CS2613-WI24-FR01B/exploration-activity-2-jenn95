# **Jest**

## **Jest Overview**
Jest is a JavaScript testing framework. Jest is easily configured and utilized in a project, including projects in React, Babel, TypeScript, Node, Angular, Vue and more [[ref]](https://jestjs.io). Unit testing is frequently used in the back-end of projects, but the front-end unit-testing is often lacking due to complexity of testing. 
Jest sets out to make the process of JavaScript testing a straight-forward process that can serve to enhance the correctness and maintainabiltiy of a project [[ref]](https://www.browserstack.com/guide/jest-framework-tutorial). Jest provides a lot of flexibility for creating tests, with a lot of documentation to help developers make use of this framework. 
## **Purpose of Jest**
The purpose of Jest is to provide a framework for easy and comprehensive JavaScript testing. 

## **Using Jest**
To run the application, node and npm must be installed. You can check if these are installed from the command line:
```
$ node -v
$ npm -v
```
To install node, please visit https://nodejs.org/ and follow the instructions to download and install. 
To install npm after installing node:
```
$ node install -g npm
```
Tests can be created in JavaScript files. The typial naming format is <file-under-test>.test.js

```
const file-under-test = require('./<file-under-test>');

test('passing param gives expected result', () => {
  expect(file-under-test.someFunction(param)).toBe(ExpectedResult);
});
```

To be able to call 'someFunction(param)' from the 'file-under-test.js', the file under test would need to
```
module.exports = {}
module.exports.someFunction = function someFunction(someParam){
  ... function logic ...
}
```
With this, someFunction can be called from the test file and the function can be used in various tests. 

Now, nagivating to the project folder in the command line, you should able to run the tests:
```
$ npm test
```
This will run the script in package.json. There are some CLI options selected to automatically run on this script to display details and test coverage of the codebase. Additional information and more Jest CLI options can be found here: https://jestjs.io/docs/cli
>[!TIP]
>Jest documentation for getting started can be found at https://jestjs.io/docs/getting-started


## **Functionalities of Jest**
I have selected some key functionalities of Flask below, some of which I have implemented in my demo project.

### **1. Setup and Teardown**
Those familiar with other common unit testing frameworks such as JUnit will be familiar with setup and teardown. Jest allows for
     BeforeEach, BeforeAll, AfterEach, and AfterAll hooks to be used to simplify testing. 


### **2. Descriptions**
Jest allows for nesting of descriptions and encourages users to write meaningful description and test names when creating tests. These are displayed in errors or with the CLI option --verbose used when running the tests. 
For example:
![Screen Shot 2024-03-29 at 4 21 01 PM](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/assets/112823585/b39103f4-2b57-421a-ab08-3fa0d52d0dfb)
Having well described and organized tests makes maintaining the code base much easier as it is easy to read each test and at a glance understand what is passing or failing. 


### **3. Mocking**

   



## **Jest Creation**
Funny enough, Flask was actually releasted as an April Fool's Day joke in 2010 by developer Armin Ronacher. Flask is more "pythonic" in nature than other web frameworks that rely on boiler plate code or dependencies [[ref]](https://www.educative.io/courses/flask-develop-web-applications-in-python/what-is-flask#Origins-of-Flask). This can feel more intuitive and lightweight for developers, and this framework met this desire as Flask became very popular and maintains popularity today [[ref]](https://www.fullstackpython.com/flask.html).

## **Motivation for Choosing Jest**
I really wanted to take advantage of this exploration activity and use it as an opportunity to learn about different packages/libraries/frameworks, but also to be able to build on an area that I consider to be a weakness of mine. Web development is something that I am still uncomfortable with, particularly interacting with HTML pages and servers, even after being in a year-long co-op position as a full stack developer. Since Python is considered to be an easier language, and that it is likely that I will be applying to full-stack jobs following graduation, I thought it was a great opportunity to work with a web development framework. After much research, through reading documentation, tutorials, and watching videos, I decided on Flask for my first exploration activity to get a sense of the underpinnings of web development frameworks, since it is a micro-framework, there is less under the hood and can be easier to develop a deeper understanding as a learner. 

## **Learning Experience**
I found a fantastic tutorial on YouTube, by Michael Herman of RealPython. This resource had an accompanying blog post for each tutorial video, which was important in really digesting what was being presented in the videos, which can be found on the [blog](https://realpython.com/introduction-to-flask-part-1-setting-up-a-static-site/) and [video channel](https://www.youtube.com/playlist?list=PLLjmbh6XPGK4ISY747FUHXEl9lBxre4mM). This is the third small demo project I started for this task and I have discovered more about how I like to approach a new task and what works for me. Throughout my co-op I was encouraged to use ChatGPT for questions about the framework we were using because the documentation wasn't the best for some situations, and recognized during this process, without the access to ChatGPT or senior developers, how frustrating it can be when you want to do something very simple and cannot seem to find the answer to your problem. Compared to the other frameworks I explored, I found that Flask has much better resources for beginners. That being said, I think it would take me a long time to become proficient in a framework, unless I really dig in and make detailed notes and examples on different use cases. 

## **Reflection on Working with Jest**
As I previously mentioned, I have worked with frameworks in the past, and throughout the process of working with Flask there were multiple instances where I thought something was a really nifty feature. I also imported a simple library, Twilio, to show how Flask can help integrate users with the libraries that the developer has used to implement certain features. In this case, Flask allowed me to collect a cell phone number that a user provides, and return the information to my python function to use the functions of the twilio library and handle this user request.  

### **Recommendation** 
I would definitely recommend this framework to a beginner in Python that was still learning the language and wanted to move into some web development projects and utilize a framework. It feels very intuitive and neat using Flask, which I feel really complements working in Python since the lanaguage itself is very explicit.

### **Personal Use**
With the intuitive nature, I found it enjoyable to use. There were many times that I thought a functionality described was very neat, and I just scratched the surface of possibilities with this framework. I could see myself continuing to build small personal projects with this framework to get better at reading and applying what I have learned from documentation and online resources. Since Flask is popular there are a lot of great resources which makes a big difference when learning something new. 

