# assignment-04-B13


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANSWER: getElementById() → Gets only one element with a specific id.
getElementsByClassName() → Gets all elements with a class name.
querySelector() → Gets the first matching element with a CSS selector.
querySelectorAll() → Gets all matching elements with a CSS selector.


### 2. How do you create and insert a new element into the DOM?
ANSWER: The steps to insert a new element into the DOM are:
1. First, create a new element.
2. Then add text or content to it.
3. Then append/insert it to the place where you want to place it.


### 3. What is Event Bubbling? And how does it work?
ANSWER: Event Bubbling is a process where when an event occurs in a child element, it spreads step by step up to its parent → grandparent → document.
How it works:
1. First the event works on the target element.
2. Then it goes to the parent.
3. Then it goes to the higher element.
4. It can go up to the document in this way.


### 4. What is Event Delegation in JavaScript? Why is it useful?
ANSWER: Event Bubbling allows the parent to detect when a child is clicked — this concept is used in Event Delegation.
Why is it useful?
1. Performance is better when there are many elements
2. Even if a new element is added, there is no need to create a separate event
3. The code is less and cleaner


### 5. What is the difference between preventDefault() and stopPropagation() methods?
ANSWER: preventDefault() → stops the default action of the element.
For example: stops the page from changing when a form is submitted or a link is clicked.
stopPropagation() → stops the event from being propagated to the parent above.
This means it stops Event Bubbling.