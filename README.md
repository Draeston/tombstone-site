We mocked our backend, so you will need to run "npm start" if you 
to check our project

We don't use Redux or any other Global State Manager, because for 
our project we didn't need to have global state. We would use it if we 
have in our project, for example, necessity to have one source of data and
keeping same data for elements that are not connected with each other.

Also, unfortunately, Jest is not working as expected. I found that https://github.com/facebook/jest/issues/11933 related to my problem
