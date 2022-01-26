# A boilerplate project using Creat React App, MVVM and clean code architecture

## Project used for browsing list of experiments created with create-react-app with typescript support

## 🚀 Quick start

1.  **Check out this repository.**

    Use `git` to check out this repository.

    ```
    git clone + `repository URL`
    ```

2.  **Change the active directory to project folder.**

    Navigate to your app directory.

    ```
    cd cra-typescript-boilerplate/
    ```

3.  **Install the dependencies.**

    Install the dependencies of the Gatsby project with `yarn` (yarn is used as default package manager).

    ```
    yarn install
    ```


4.  **Start developing.**

    Start the project in development mode

    ```
    npm start
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

6.  **How to commit!**

    Add changed files to staged and enter git commit in terminal. Commitizien lib will guide you with commit message.
    It will aks you for type, scope, subject / short description and long description of your commit.
    You can find out more about this at [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

# Introduction

You can jump straight into code, and look how the final boilerplate project looks like, before reading if you like so to get a general idea about our project structure.

Every large-scale system project has to be well structured for easier maintenance and scalability. The goal is to standardize how someone should write their code so multiple developers can work on the same codebase without issues like

- Understanding how data flows through your app
- Where is some component located and why is that
- Why are some props passed through your component in this way and not another
- Losing time for thinking about how to create and structure new components

Our boilerplate project is made with the Create-React-App framework ( template-typescript ) and it is using

- Typescript - JavaScript with syntax for types
- husky – pre-commit hooks library
- react-router-dom - react routing library
- mobx – state management library

In this course, we’ll guide you into how to structure your project and how to organize data flow through your application.

Of course, you’ll have to learn, if you are not already familiarized with concepts such as Typescript, how is mobx storing and retrieving data. Every library has good documentation so that’s a good start.

# Folder structure

If we look inside our project with have the following folder structure

**Data** – this folder contains all files for data input/output manipulation. it contains repositories that behave as the single source of truth for our application.

- Repositories – this folder contains all our repositories files ( we will discuss later what the repository does )
- Sources – this folder contains all files which are handling our data sources ( local or remote )

**Domain** – this folder contains all files regarding our business logic. It is written in pure JavaScript. It contains

- entities ( types that our application handles )
- UseCases – interfaces that describe what our application can do. Those interfaces are being  implemented by our repositories

**Hooks** – this folder contains all custom hooks which can be used by multiple components in our project

**Presentation** – this folder contains all our view components and is being organized into

- Common – this folder contains all common components which are being used by multiple other components
- Pages- this folder contains page components for our app
- Routing- this folder contains components that are responsible for routing in our app. It’s handled with react-router-dom library

**Theme** - this folder contains all global theme/style related files

**Types** - This folder contains all typescript global types

**Utils** - this folder contains global util files with different kinds of functions

# App routing

Besides the state, we need to solve how our app will be routed. We can open the routing folder and check what's inside. Here we have RouteView which is our main component for app routing.

All apps mostly have some routes which need to be available to logged-in users only. So we’re handling that with two different component

**AppRouting**- contains all app routes available for logged in users only

**NonAuthRouting**- contains all routes for which you don’t need to be logged in. This can be the landing page of our product f.e.

# UI components

We’re storing our common UI components in the common folder inside the presentation folder. These components are available globally for other UI components. Pages components contain all page components.

Every UI component has its own folder and the following structure

componentNameFolder

- componentName – this is our view component
- componentViewModel – this is our viewModel ( it will be described later )
- componentSpecificStyle- this is a style for this component only
- componentsFolder- this folder contains components that will be used by this parent component only. Components in this folder has same structure as the parent

Having a component structure like this ensures modularity and decoupling from other parts of the app.

# Clean code architecture

Although the terminology may differ, the idea underlying this architectural pattern is that the domain determines how tools should be arranged, not the other way around.

The basic goal of a clean architecture, like that of other architectures, is to segregate issues. Divide the hierarchy by interest, design domain-centric rather than technical implementation, and make sure the internal area isn't reliant on external aspects like the framework or database UI.

- Make a distinction between domain areas and detailed implementation areas.
- The framework has no bearing on architecture.
- The outer zone can rely on the inner zone, whereas the latter cannot rely on the former.
- Abstraction is used in both high-level and low-level modules.

Other than that we’ll separate our application into three layers

- domain
- data
- presentation

# Data flow in clean code architecture

Starting from user interaction/view.

**View**

The view is responsible for showing UI components to user and for catching user interaction. Every view has its own View Model ( their relationship is 1:1 ).

**ViewModel**

A ViewModel object provides the data for a specific UI component, such as a fragment or activity, and contains data-handling business logic to communicate with the model. For example, the ViewModel can call other components to load the data, and it can forward user requests to modify the data.

**Repository**

The Repository is a function that has dependencies on local stores ( such as mobx, redux ) and remote ( whatever API calls we have )


# Recap

Maybe you think that you already have good architecture for your React project and that you don’t need to learn this MVVM pattern. The problem is when you don’t have standardized code architecture. As when other developers have to work on your code, and they have to spend multiple hours or days just to understand how data flows through your app.

- Every component in our React project will have the same structure
- View component which will be named as ComponentName with a capital letter and will only contain code that is responsible for showing UI elements, and implementation of our ViewModel
- ViewModel component which will be named as ComponentName.ViewModel. The ViewModel is responsible for user input handling, data manipulation, and storing retrieving data from our store
- The model component will be named as ComponentName.Model. The Model component is the representation of data storing and nothing else.

With MVVM you can achieve a clean separation of concerns and testing will become much easier than before.