# Get collecting with My Pretty Unicorn Collector!

## Part 1
  * Allow the form to track inputs in the state of the `FormContainer`
  * Be able to submit the form, passing data to the `UnicornPageContainter` so that we can display our unicorns on the page!
  * Finish creating the `UnicornTiles` so that each unicorn appears as a `li` on the page

## Part 2
  * Add a fetch in `componentDidMount` of the `UnicornPageContainter`, so that we can load up unicorns from our server!
  * Ensure that they display on the page correctly!
  * Add a 'POST' fetch, so that newly created unicorns are persisted on our backend.
  * Ensure that newly persisted unicorns are returned to the front end and added to our `unicorns` array in state

## Part 3
  * Define routes in `App.js` such that router renders our app. Going to `"/"` or `"/unicorns"` should render the UnicornPageContainter as usual.
  * Define a route for the `/unicorns/:id`, such that a new component, `UnicornShowContainer` is rendered on the screen
  * The `UnicornShowContainer` should display the `name` and `description` of our respective unicorn. Note: You'll likely need to make another fetch request to retrieve this information.
  * Be sure to add a `Link` component, so that each `li` in our unicorns list is actually a link to the unicorn's show page.
