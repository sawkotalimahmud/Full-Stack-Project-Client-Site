import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>Que: How will you improve the performance of a React Application?</h2>
      <p>
        Ans: Keeping component state local where necessary Memoizing React
        components to prevent unnecessary re-renders Code-splitting in React
        using dynamic import() Windowing or list virtualization in React Lazy
        loading images in React
      </p>
      <br></br>
      <h2>
        Que: What are the different ways to manage a state in a React
        application?
      </h2>
      <p>
        And: When we talk about state in our applications, it’s important to be
        clear about what types of state actually matter. There are four main
        types of state you need to properly manage in your React apps: Local
        state Global state Server state URL state
      </p>
      <br></br>
      <h2>Que: How does prototypical inheritance work?</h2>
      <p>
        Ans: Every object with its methods and properties contains an internal
        and hidden property known as Prototype. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the Prototype of
        an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language,
      </p>
      <br />
      <h2>Que: What is a unit test? Why should write unit tests?</h2>
      <p>
        Ans: Unit testing ensures that all code meets quality standards before
        it's deployed. This ensures a reliable engineering environment where
        quality is paramount. Over the course of the product development life
        cycle, unit testing saves time and money, and helps developers write
        better code, more efficiently.
      </p>
      <br></br>
      <h2>
        {" "}
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>
      <p>
        Mutating state directly can lead to odd bugs, and components that are
        hard to optimize. Here's an example. As you may already know, a common
        way to tune a React component for performance is to make it “pure,”
        which causes it to only re-render when its props change (instead of
        every time its parent re-renders).
      </p>
    </div>
  );
};

export default Blog;
