# Installation

Clone the repository and run 'npm install' in the root folder to install dependencies.
Run 'npm start' to start the application.

## Dependencies

I used Material-UI as the UI library for this project, dayjs to handle date and time and redux to handle state.

### Project Structure

The src folder contains several folders including components, services, view and redux.
The components can be found in the components folder and the dashboard itself can be found in the views folder.


### Implementation

I followed react principles working on this project so there aren't exactly much specifics to point out. 
Regarding the timeline bar, i search for libraries tha could help with that, after spending sometime searching with no success, i decided to write the component myself. I wrote an algorithm for determining the idle, scheduled and turnaround times, saved them in an array and used the array to build the timeline.

