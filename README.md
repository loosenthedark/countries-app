<h1 align='center'>REST Countries API React App</h1>

<p align="center"><img src="https://user-images.githubusercontent.com/48750933/125585707-f5e0ade0-2acf-4dd0-8dd3-ec6487cfbbe3.png" alt="device screenshots mockup" width="60%" height="auto"><img src="https://user-images.githubusercontent.com/48750933/125586248-561b3097-8ff0-44bd-9ff2-4c4cc6303e53.png" alt="Country info page screenshot mockups on mobile and tablet device sizes" width="30%" height="auto"></p>

<h4 align="center"><a href="https://4o0ez.csb.app/">Live link to deployed project</a> (CodeSandbox) | <a href="https://loosenthedark-countries.netlify.app/">Alternative link</a> (Netlify)</h4>

## User Experience

**The Countries App** is a fully responsive interactive frontend site, offering users a dynamic and engaging data portal through which they can explore and learn more about countries. Both first-time and returning visitors will be impressed by the app's mobile-first design as well as its intuitive navigation and layout, while their geographical and cultural knowledge will be enriched by the site's informative data presentations.

## Project Design

### Colour Scheme:

<p align="center"><img src="https://user-images.githubusercontent.com/48750933/125596000-6fd7c6ea-a5f7-426b-8386-f6c9f7e94651.png" alt="Countries App colour scheme (Coolors palette) screenshot" width="50%"></p>

### Typography:

#### Primary font...

[Open Sans](https://fonts.google.com/specimen/Open+Sans) | fallback = `sans-serif`

#### Secondary (Heading) font...

[Montserrat](https://fonts.google.com/specimen/Montserrat) | fallback = `sans-serif`

## Features

### Existing Features:

- When a user accesses the site, they can immediately begin browsing from a list of over two hundred individual countries displayed in alphabetical order on the main landing page
- In order to make this task somewhat quicker and easier, they may also choose to apply any one of six available continent filters to the list of countries, again listed in alphabetical order: **Africa** | **Americas** | **Asia** | **Europe** | **Oceania** | **Other**
- They can easily reset whatever filter they have applied by clicking on the **All** button above this continents menu
- In keeping with UX best practices, a 'back-to-top' button will appear in the bottom right-hand corner of the screen once the user has scrolled more than 500px down the landing page. Clicking on this will return them to the top of the page. Smooth scrolling has been enabled to make this functionality even more pleasing to the eye.
- The landing page UI for each country consists of a national flag, name, capital and population
- Beneath this information, there is a 'MORE INFO' call-to-action button for each country - clicking on this will bring the user through to a second screen, which profiles that particular country in more granular detail
- The country information listed on this second screen consists of:
  - **name** (displayed both in English and that particular country's native language/script)
  - **flag**
  - **capital city**
  - **population**
  - **area**
  - **currency**
  - **language(s)**
  - **country codes** (ISO 3166-2 / ISO 3166-3)
  - **calling code**
  - **top-level domain**
  - **region**
  - **neighbouring countries** (if any)
- Each neighbouring country is conditionally rendered in the form of a button-like link that takes the user to the 'MORE INFO' screen belonging to that specific neighbouring country. Thus, The UK's page can be accessed directly from the Ireland screen (etc.). This nimble navigation lends itself to a rewarding and highly immersive UX.
- When the user is finished digesting this individual country data, and/or they wish to search for a country not listed under 'Neighbouring countries' on the screen they're on, they may return to the Home screen by clicking on a 'Return Home' button at the foot of the page.
- A bespoke 'spinning loader' component is rendered each time the user invokes the `fetch` method by requesting data from the API
- Basic `try {} catch {}` logic has been scripted to handle any (fetch-related network) errors - the user will be redirected to a generic 'Error handler' page, from which they can return to the Home page with the click of a button

<p><img align="left" src="https://user-images.githubusercontent.com/48750933/125587365-68e871ae-86a6-4c59-9ca0-35b1693567fe.png" alt="wireframe detail for mobile" width="52%" height="auto">   <img src="https://user-images.githubusercontent.com/48750933/125587446-fb76281e-e37c-448f-b376-60cbb5562c49.png" alt="landing page screenshot on mobile" width="21%" height="auto"><img align="right" src="https://user-images.githubusercontent.com/48750933/125587557-aa921cb6-6244-4039-a3f1-94dcd9c78cd9.png" alt="country info page screenshot on mobile" width="21%" height="auto"></p>

### Potential Future Features/Approaches:

- [Autocomplete search box](https://www.npmjs.com/package/react-search-autocomplete): this feature was initially built and then discarded due to implementation difficulties and time constraints
- [Pagination](https://www.npmjs.com/package/react-paginate)
- Navbar
  - to make it easier for users to return to the Home page, as the button for doing this can sometimes be hidden below the fold on the country info pages, particularly on mobile
  - if and when the site gets built out further to include additional page(s), a navbar will be necessary to guide user behaviour and enhance UX
- (Google?) Maps API integration on country info pages
- Toggleable dark mode option
- 'Random Country' feature button/page
- Use of CSS variables/Sass to make stylesheet code more concise, reusable and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)-compliant

## Technologies Used

### Languages:

- [HTML5:](https://en.wikipedia.org/wiki/HTML5) used for structuring the site
- [CSS3:](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) used for styling the site
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) [(ECMAScript 6):](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015) used for site logic and web page behaviour

### Frameworks, Libraries, Programmes and Tools:

- [React](https://reactjs.org/)
  - [ReactDOM](https://reactjs.org/docs/react-dom.html)
  - [React Router](https://reactrouter.com/web/guides/quick-start)
  - [`styled-components`](https://styled-components.com/): used to style dynamic 'back-to-top' button
  - [React Icons](https://react-icons.github.io/react-icons/)
- [`npm`](https://github.com/npm/cli)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [REST Countries API](https://restcountries.com/#api-endpoints-v2-all)
- [Git:](https://git-scm.com/) (version control)
- [GitHub:](https://github.com/) (remote code storage)
- [Google Fonts](https://fonts.google.com/)
- [Coolors](https://coolors.co/)
- [Am I Responsive](http://ami.responsivedesign.is/#) & [LambdaTest](https://www.lambdatest.com/selenium-automation/) (testing)
- [Netlify](https://www.netlify.com/) & [CodeSandbox](https://codesandbox.io/) (deployment)

## Testing

- All testing was performed manually, and on a near-constant basis as the project evolved. [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2) served as an indispensable resource throughout this testing process, allowing incremental adjustments to be made to the site's infrastructure and layout. The app's responsiveness was also closely monitored and rigorously tested from start to finish using the cloud-based [LambdaTest](https://www.lambdatest.com/selenium-automation/) cross-browser testing tool.

- In addition to Chrome and LambdaTest, the site's functionality and appearance was also checked repeatedly in the Firefox, Safari, Microsoft Edge and Amazon Silk browsers. Numerous devices and screen sizes - belonging mostly to friends and family members - were similarly used to identify any blind spots in the site's responsive design and feature compatibility. These included, but were not limited to, the Samsung Galaxy S5, iPhone 7 Plus, Moto G4, Huawei P20, MacBook Pro, iPad and Kindle Fire.

## Deployment

The site has been imported to **CodeSandbox** (via **GitHub**) to facilitate deployment. A fully-operational live version can be viewed [here](https://4o0ez.csb.app/). There is also a [backup deployment](https://loosenthedark-countries.netlify.app/) currently live on **Netlify**.

### Manual build:

A comprehensive setup and configuration guide can be found [here](https://github.com/react-native-training/manual-react-setup/blob/master/README.md)

## References and Resources

- ['How to print a number with commas as thousands separators in JavaScript'](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript) (Stack Overflow)

- ['How to create a Scroll To Top button in React JS ?'](https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/) (GeeksForGeeks)

- ['Spinner loader animation with ReactJs and CSS](https://www.youtube.com/watch?v=UeGUngMEbKU) (YouTube tutorial)

- ['Open Any Public GitHub Repo in Codesandbox in 3 Seconds'](https://www.youtube.com/watch?v=Typ-gTvZ5WM) (YouTube demo)

- [John Smilga](https://www.johnsmilga.com/) React tutorials

## Notice

This site has been created for demonstration purposes only.
