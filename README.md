# Product Order App

Product Order App is a single-page application (SPA) developed in Angular 17, which implements a dynamic product order form that allows users to select products and quantities, view their order summary, and use text-to-speech functionality to read out the order.

---

## Features

- **Dynamic Rows**: Users can add up to 8 rows, each with a product and quantity selection.
- **Order Summary**: Displays the selected products and quantities.
- **Text-to-Speech**: Reads out the order summary using a free API. The text-to-speech functionality uses the [VoiceRSS Text-to-Speech API](https://rapidapi.com/voicerss/api/text-to-speech-1/). Ensure that you have an API key to use this service.
- **Responsive Design**: Ensures optimal viewing across a range of devices.
- **Data Storage**: Stores workout data in array data structure.

---

## How It Works

1. **Initial View** <br />
   -> The form starts with a single row displaying:<br />
   -> Product Name: Initially shows "Choose Product".<br />
   -> Quantity: Initially shows "Choose Quantity".

- Users can click on "Choose Product" to open a drop-down menu and select a product.
- Users can click on "Choose Quantity" to select a quantity from 0 to 5.

2. **Adding More Rows**<br />
   -> After selecting a product and quantity in the first row, click the "ADD" button.<br />
   -> A new row will appear below the existing row with the same default options ("Choose Product" and "Choose Quantity").<br />
   -> Users can add up to 8 rows. Each row will follow the same pattern: choose a product and quantity.

3. **Show Order**

- After filling in up to 8 rows, click the "Show Order" button located below the last row.
- This action will remove any rows that are not completely filled (i.e., rows where the product or quantity is not selected).

4. **Order Summary**

- A new section (Grid 2) will be displayed below the "Show Order" button.
- This grid will list all selected products and their corresponding quantities.

5. **Text-to-Speech**

- Click the "What is my Order?" button to have the app read out the order list from Grid 2.
- The text-to-speech functionality will use a free API (e.g., VoiceRSS Text-to-Speech) to convert the order list into spoken words.

---

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

- Visual Studio Code - Code Editing, Git Bash - Git command line , Node.js and npm installed on your development machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/itsindrajput/product-order.git
   cd product-order
   ```

2. Install dependencies:
   `npm install`

### Development Server

- Run the application locally:
  `ng serve`

### Build

- To build the project for production:
  `ng build --prod
`

---

## Testing

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Unit tests for the components are written using Angular's testing utilities and Jasmine. You can run the tests using the following command:

---

## Development server

- I have Deploy the application on a hosting platform like: Netlify
- 🌎 https://product-order-app.netlify.app/

- You can also Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## Additional Information

Author: Rishabh Kumar Singh <br />
License: This project is licensed under the MIT License. See the LICENSE file for details.<br />
Contact: itsindrajput@gmail.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.
