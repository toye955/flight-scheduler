# Installation

Clone the repository and run 'npm install' in the root folder to install dependencies.
Run 'npm start' to start the application.

## Dependencies

I used Material-UI as the UI library for this project, dayjs to handle date and time and redux to handle state.

### Project Structure

The src folder contains several folders including components, services, view and redux.
The components can be found in the components folder and the dashboard itself can be found in the views folder.


### Implementation

The Api calls are made in the dashboard and the data is kept in the redux store. Reason for implementing with redux is to make the data available in all the parts of the application and also to make data update and manipulation reflects from a single source of truth.

Regarding the timeline bar, i searched for libraries that could help with that, after spending sometime searching with no success, i decided to write the component myself. I wrote an algorithm for determining the idle, scheduled and turnaround times, saved them in an array and used the array to build the timeline.

