# React Carousel

## 1. Project Description

This is a React carousel component built with React Hooks. You can see how it works by clicking [this link](https://g5-freemen.github.io/carousel-react/build/).

*(In order to be able to see swipes in action, make sure to use a touch device OR enable touch device emulation in 
your browser's DevTools).*

## 2. Features
* The carousel is fully responsive and adapts dynamically to screen size change
* It works with all kinds of HTML-content
* You can use the navigation buttons in order to proceed to the next / previous slide on desktop.
* You can also use swipes for navigation on touch devices.
* Navigation through the slides can also be performed via navigation panel (slider dots) on the bottom of the carousel

## 4. How to use

Typically usage of this component looks like this:

<pre>
  &lt;Carousel&gt;
    &lt;Item&gt;
      &lt; any HTML content &gt;
    &lt;/Item&gt;
  &lt;Carousel&gt;
</pre>

&lt;Item&gt; is a wrapper for HTML content and &lt;Carousel&gt; is a wrapper for the items (&lt;Item&gt;).

You can setup the carousel (ex. a number of slides on the screen, a gap between slides, auto slideshow, etc.)
using _settings.js in components directory.  

## 3. Environment

In order to set up the project proceed as follows:
1. Clone the repo - `git clone https://github.com/g5-freemen/carousel-react.git`
1. Run - `npm install`
   
The project uses the following scripts:
1. `start` - used to run the project against localhost in development mode
1. `build` - used to create an optimized project build

## 4. Technologies used

* React
* Webpack and Babel to set up the environment

## 5. Known issues

* Active slide is not always correctly set after swipe