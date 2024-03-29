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
Tests can be created in JavaScript files. The typial naming format is 'file-under-test'.test.js

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

Now, navigating to the project folder in the command line, you should able to run the tests:
```
$ npm test
```
This will run the script in package.json. There are some CLI options selected to automatically run on this script to display details and test coverage of the codebase. Additional information and more Jest CLI options can be found here: https://jestjs.io/docs/cli
>[!TIP]
>Jest documentation for getting started can be found at https://jestjs.io/docs/getting-started


## **Functionalities of Jest**
I have selected some key functionalities of Jest below, some of which I have implemented in my demo project.

### **1. Setup and Teardown**
Those familiar with other common unit testing frameworks such as JUnit will be familiar with setup and teardown. Jest allows for
     BeforeEach, BeforeAll, AfterEach, and AfterAll hooks to be used to simplify testing. 

Below we see BeforeEach is used to set up a mocked JobClient. Before each test is run, the contents of BeforeEach will be executed. 

https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/blob/62a99f1799aa751b1c3c593d8c8e46971aa8e090/test/RunJobClient.test.js#L12-L14

### **2. Descriptions**
Jest allows for nesting of descriptions and encourages users to write meaningful description and test names when creating tests. These are displayed in errors or with the CLI option --verbose used when running the tests. 

For example:

![Screen Shot 2024-03-29 at 4 21 01 PM](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/assets/112823585/b39103f4-2b57-421a-ab08-3fa0d52d0dfb)

Having well described and organized tests makes maintaining the code base much easier as it is easy to read each test and at a glance understand what is passing or failing. Below is a snippet of the code that produced the output seen above:

https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/blob/62a99f1799aa751b1c3c593d8c8e46971aa8e090/test/JavaScript1.test.js#L30-L37


### **3. Mocking**
In unit testing, it is common to mock some functions so that an area of the code that you are looking to test can be isolated [[ref]](https://medium.com/smallcase-engineering/testing-fundamentals-mocking-11cc5301df01). Jest provides developers multiple options for mocking. Mock functions created in Jest tests can be used in various ways to assist in testing [[ref]](https://jestjs.io/docs/mock-functions). One common implementation of mocking that I utilized in my demo is mocking a return value. This can be seen in the code snippet below. 

https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/blob/62a99f1799aa751b1c3c593d8c8e46971aa8e090/test/RunJobClient.test.js#L5-L9

Here, we mock the axios connection with jest.fn(). Then below, we provide the value that a call to the axios connection by the request function should return:

https://github.com/CS2613-WI24-FR01B/exploration-activity-2-jenn95/blob/62a99f1799aa751b1c3c593d8c8e46971aa8e090/test/RunJobClient.test.js#L684

Then, we do not have to actually rely on API results to test certain functionalities of our program. 

### **4. Other Jest Functionalities**
#### **Snapshot Testing**
This is not something that I employed in my demo, but I feel that it is an important attribute for a front-end testing framework to have and is worth mentioning in this report. Snapshot testing can be used to check UI components [[ref]](https://jestjs.io/docs/snapshot-testing).

#### **Async Functions**
Jest has capabilities for working with asynchronous code as well, providing users options for using promises or async/await [[ref]](https://jestjs.io/docs/asynchronous). 
   
## **Jest Creation**
Jest was created by Facebook (now Meta) in 2016. When Facebook's chat feature was being implemented in JavaScript, Jest was born as an easy to use, low-configuration testing framework with high performance capability. It was maintained part-time by Meta engineers as well as community members as an open source framework. The majority of contributions since 2018 have been made by community members rather than Meta engineers. In 2022, Jest was transferred from Meta Open Source to the OpenJS Foundation  [[ref]](https://engineering.fb.com/2022/05/11/open-source/jest-openjs-foundation/).

## **Motivation for Choosing Jest**
Throughout my year-long co-op placement as a software developer I saw an increased focus on quality assurance, including unit testing. We used JUnit, which I was also exposed to in my coursework in CS2043. I was interested in exploring a different testing framework for a different language. Unit testing is key to effectivly creating and maintaining a correct codebase that adheres to requirements. 

## **Learning Experience**
Already having experience with unit testing, it was interesting to learn about Jest. I found Jest easy to use, with great documentation on the Jest website, as well as external sources of information including videos and articles.

## **Reflection on Working with Jest**
As I previously mentioned, I found Jest easy to work with and enjoyable to read the documentation and try implementing various tests in my small demonstrative project. I found https://dev.to/zirkelc/how-to-test-console-log-5fhd and https://geshan.com.np/blog/2022/06/jest-beforeeach/ to be helpful resources when working on this project. 

### **Recommendation** 
I would definitely recommend this framework to someone looking for a JavaScript testing framework. I found that it was very easy to set up and quickly start writing and running tests. For more complex tasks, I found that the documentation on Jest's website to be a great starting point. So far, Jest feels intuitive to use and I feel that it would be a great addition to a project with JavaScript where unit testing could prove useful. 

### **Personal Use**
There are many facets of this framework that I did not have the chance to explore and am looking forward to having the time to check out some of the other features of Jest after finishing this semester. 

