


Project Live Link :  habitual-coal.surge.sh

Requirement Link : https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08-.pdf

React Fundamental Concepts in This Project
Components: Built with functional components (e.g., Banner, ProductsDetails, ErrorPage) for reusable UI blocks.

Props: Data passed between components, allowing dynamic content, like updateCartCount in ProductsDetails.

State Management (useState): Manages internal states, such as cart count and error messages, and enables conditional rendering.

Side Effects (useEffect): Handles data fetching and updates based on dependencies, like product id in ProductsDetails.

React Router: Implements page navigation, route-based rendering, and errorElement for a common error display page.

Event Handling: Handles button actions, like adding items to the cart and wishlist with click events.

Conditional Styling: Applies dynamic CSS classes, such as disabling the cart button when an item is already added.

Modular Structure: Organized code in separate components for easier maintenance and readability.

Data Fetching: Uses fetch() for asynchronous data retrieval and integrates basic error handling.

React Icons: Utilizes icons from react-icons for better UI, including cart and heart icons.

SEO with Helmet: Sets page titles and meta tags dynamically to improve SEO.




Local Storage API:

The localStorage API is directly accessed using methods like localStorage.setItem(), localStorage.getItem(), and localStorage.removeItem() to save, retrieve, and delete data in the browser's local storage.
This allows data persistence, so added items, cart details, etc., are retained even if the page is refreshed.
Utility Functions:

Helper functions were created to handle local storage interactions. For example:
addToCart(): Adds an item to the cart in local storage, checks if an item already exists, and increments or initializes the cart count.
getAllProducts(): Retrieves and parses the stored cart data from local storage.
Using utility functions centralizes the data management logic, making it easier to maintain and reuse.
Data Parsing and Stringifying:

Local storage only accepts strings, so JSON.stringify() is used to store objects/arrays as strings.
Similarly, JSON.parse() is used to convert stored strings back into JavaScript objects/arrays when retrieving data.
Conditional Rendering Based on Local Storage Data:

Components dynamically update their UI based on the data in local storage. For example, the cart button becomes disabled if an item is already added, and the cart count updates automatically by reading the local storage data.
Data Synchronization:

The project includes functions that check and update the component state based on local storage data. This ensures that components reflect the most current data, especially after actions like adding or removing items.


Product Details with Dynamic Rating and Availability:

Each product page displays detailed information, including title, price, specifications, and availability.
Users can view and update product ratings dynamically, with changes stored and reflected across sessions.
Add to Cart with Persistent Local Storage:

The "Add to Cart" functionality allows users to add items, with the cart count updating in real-time.
Cart data is stored in local storage, enabling persistence across page refreshes and visits, so users don’t lose their selected items.
Wishlist Management:

Users can add items to a wishlist, managed with a heart icon. This feature is designed for easy toggling and visibility within the interface.
Navigation and Error Handling:

The project includes a navigation structure with React Router that seamlessly navigates between pages like Home, Dashboard, and Product Details.
A custom error page (errorElement) is displayed for any broken links or errors, providing a smoother user experience.
Responsive Banner with Call to Action:

A visually appealing banner introduces the store, including a "Shop Now" button that navigates users to the main shopping page.
The banner is responsive and styled to adapt to different screen sizes, enhancing the project’s usability on mobile and desktop.
