# goesSticky
A simple jQuery plugin to make you elements sticky.

# Quick integration
1. Make sure the element which will have to stick has a parent with position: relative;
2. Initialize the plugin with $(".sticky_class_name").goesSticky({ scope: $("body"), offest: 10 });

# Options
The plugin has two options "scope" and "offset"
1. "scope", defines the scope where the sticky element should reside. 
For example let say the scope is $('body') and this body has a certain height. When you scroll down the sticky element will stick when it
reaches the top of the body and it will unstick when the bottom reaches the bottom of the body.
2. "offset", defines how much offset from top you would like to have when the element sticks. It have to be an integer and you can set
e.g. $("site-header").outerHeight(); if your offest will depend on your header.
