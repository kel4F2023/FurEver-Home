### FurEver Home
SRID Pet Adoption Team Group Project

## Style Guide
https://app.siter.io/account/pg_gHM577stDPJUCctpGSRj3crg9/preview 

## Prerequisites

- Node.js v18 or higher


## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Limitations
- **Before testing**: FurEver Home is designed from ground up to support mobile platforms, please use a phone screen to test our MVP or if you are using a laptop, **please use the mobile inspection view.** Where the top logo icon is the home button.
- **Care Log data**:
Since backend is not included for the MVP, the care log data (weight, food intake, exercise) are pre-populated and fixed.
- **Care Log Recommendations**:
Since backend is not included for the MVP, the recommendations are derived based on the dummy care log data, hence inputting the new entry does not affect the recommendation results.
- **Missing Prefill for Rescheduling**: 
Since backend is not included for the MVP, global state management is not implemented. Rescheduling an appointment requires manually re-entering details, as the form does not prefill existing data from any database.
- **Google Meet Button**:
The Google Meet button is currently a placeholder and does not redirect users to the application. This feature was not implemented because it's a third party actor that is not included in the MVP.
- **Save and Exit Feature for Filling Application**: 
Since backend is not included for the MVP, we did implement the data-saving feature using local storage at the front-end, but only provide the user with the exit functionality when he/she clicks on the save & exit button.
-  **Clear feature for Searching Pets**:
The clear button only clears out the searching results but the input fields have to be manually cleared.
