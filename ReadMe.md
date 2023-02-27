# Assignment-1

## 1.What is Emmet?

Emmet is a free plug-in availabe in various editors that helps to write redundant and trivial HTML & CSS code with shorthands expression.
Ex - write html and press tab it will create an html boilerplate

## 2.Difference between Library and framework?

We can say that library implements a particular function. Ex- jQuery, React.You can control the flow of your application here
Whereas a framework is a collections of libraries. Framework decides the flow of your apllication. Ex- Node JS,Spring

## 3.What is CDN? Why Do we use it?

It stands for Content Delivery Network, it's basically a service that accelerates internet content delivery. A good short [video](https://youtu.be/Bsq5cKkS33I) by IBM. Main benefit it makes website faster. Servers are not all around the world but users are. So how to facilitate it. It reduces the distance between the content providing server and the user by caching a local copy of the static data. Why static content? Coz it doesn't change very frequently.
Another Good Video by [ByteByteGo](https://youtu.be/RI9np1LWzqw).

## 4.Why is react known as react?

React is a JavaScript library for building user interfaces that was developed and open-sourced by Facebook in 2013. It is known as React because it was designed to help developers "react" to changes in the state of an application, by efficiently rendering and updating the UI in response to those changes.

React is designed to be declarative, meaning that developers specify what the UI should look like based on the current state of the application, and React takes care of updating the UI as needed. This allows developers to focus on building the logic of the application rather than worrying about how to update the UI efficiently.

## 5.What is crossorigin in script tag?

First let's see what is CORS. It stands for Cross origin Resource Sharing. Browser only allows request(api class, data calls, http calls) from same origin if CORS is not defined. CORS helpes in resoource sharing between 2 different origin/domains .
The Crossorigin attribute provides support for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
The crossorigin attribute is used in the script tag to indicate that the script should be loaded from a different origin (domain, protocol, or port) than the current page. This is used to allow web pages to load resources from a different domain, while still allowing the browser to apply security measures such as the same-origin policy.The crossorigin attribute can be set to either anonymous or use-credentials. If set to anonymous, the browser will include an Origin header with the request, but will not send any cookies or other credentials. If set to use-credentials, the browser will include credentials with the request.

The crossorigin attribute is often used to allow web pages to load resources such as fonts or scripts from a CDN (Content Delivery Network). It can also be used to allow web pages to access APIs or other resources from a different domain.

For example, the following script tag includes the crossorigin attribute to allow the script to be loaded from a different origin:

`<script src="https://example.com/script.js" crossorigin="anonymous"></script>`

## 6.What is the difference between React and ReactDOM ?

React is a JavaScript library for building user interfaces. It is designed to be declarative, meaning that developers specify what the UI should look like based on the current state of the application, and React takes care of updating the UI as needed. React is designed to be efficient and flexible, and is widely used in the development of web and mobile applications.

ReactDOM, on the other hand, is a library that provides an interface between React and the DOM (Document Object Model). The DOM is a tree-like structure that represents the HTML of a web page, and ReactDOM provides a set of functions that allow React components to be rendered to the DOM and updated efficiently.

In short, React is a library for building user interfaces, while ReactDOM is a library for interacting with the DOM and rendering React components to the web page. While they are often used together, they serve different purposes and can be used independently of each other.

## 7.What is difference between react.development.js and react.production.js files via CDN?

react.development.js and react.production.js are two different versions of the React library that are available via CDN (Content Delivery Network). These files contain the same code, but are optimized for different environments and have different features enabled.

The react.development.js file is intended for use during development and includes additional features and debugging tools that can be helpful when building and testing React applications. These features may include additional warning messages, error checking, and other tools that can help identify problems or potential issues with the code.

The react.production.js file, on the other hand, is intended for use in production environments and has been optimized for performance and size. It does not include the additional debugging tools and may have other features disabled in order to reduce the size of the file and improve performance.

Which version of the React library you should use depends on your needs and the environment in which the code will be running. In general, the react.development.js file is recommended for use during development, while the react.production.js file is recommended for use in production environments.

## 8.What is async and defer?

The async attribute tells the browser to download the script in the background while the page is still loading, and to execute the script as soon as it is available. This can improve the loading speed of the page, as the script does not block the rendering of the page while it is being downloaded. However, the script may not necessarily be executed in the order it appears in the HTML, as it may be executed as soon as it is available.

The defer attribute tells the browser to download the script in the background while the page is still loading, but to execute the script only after the page has finished loading. This can also improve the loading speed of the page, as the script does not block the rendering of the page. However, unlike async, defer ensures that the script is executed in the order it appears in the HTML.

Both async and defer are used to improve the performance and loading speed of web pages by allowing scripts to be loaded and executed in a non-blocking manner. However, they have different behaviors and may be more suitable for different use cases.
