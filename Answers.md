# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJs is a javascript library that lets you build websites more quickly without losing any of the flexibility you have when you manually write the html/css/js seperately. It's arguably better to do everything related to a webpage element(say a <button>) all in a single place than to spread it out over three files. It's also fast because it utilizes a virtual DOM which allows you to update particular sections of your webpage without reloading the whole thing.

1. What does it mean to think in react?
It means you need to think in components. You will create react components -- pieces of your webpage -- and then stitch them together to make your webpage.

1. Describe state.
This feature lets you tell react to watch certain variables that you choose using useState(). If those variables change React will attempt to update the effected components, at least if you set it up correctly.

1. Describe props.
I think of props as being equivalent to function parameters except they are for components. You pass data and functions down through props & back up again.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are things that happen outside the scope of a function. The most common examples are downloading data from an API -- you have to wait till it finished before you generate your relevant components! -- and timers. You need to use hooks to try and sync everything up. One hook is the useEffect function. Depending on the second parameter you give it, it will update only once, or whenever a useState variable changes, or anytime anything changes. This can be used to resolve most syncing issues.
