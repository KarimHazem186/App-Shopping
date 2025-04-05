# App-Shopping
This is a simple, interactive shopping cart application built with HTML, CSS, and JavaScript. The app allows users to browse products, sign in, sign up, and add items to their cart. It also includes functionality to store user data and shopping cart information in the browser's `localStorage`, making the app persistent across sessions.

## Features:

- **Shopping Cart**: Users can add items to their cart, view their cart contents, and remove items.
- **Sign In & Sign Up**: Users can create an account or sign in to manage their shopping experience.
- **Store in `localStorage`**: User data, cart items, and other preferences are stored locally, ensuring data persists even after the page is reloaded.
- **Filter By Size**: Filter products based on available sizes.
- **Dynamic UI**: The UI dynamically updates based on the user's actions (e.g., adding/removing items, signing in).
  
## Main Components:

- **user**: Manages user authentication and profile data.
- **data**: Contains the data structure for products and user information.
- **langDir**: Manages language and direction settings (if multi-language support is needed).
- **cartMenu**: Displays the shopping cart interface and provides options to modify cart contents.
- **drawProductsUI**: Draws the list of available products on the page.
- **drawFavoritesProductsUI**: Displays a list of the user's favorite products.
- **drawCartProductsUI**: Displays the products currently in the shopping cart.

## Technologies Used:
- HTML, CSS, JavaScript
- `localStorage` for persisting data between sessions

