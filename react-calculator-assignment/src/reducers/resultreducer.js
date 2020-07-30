import { v4 as uuidv4 } from 'uuid';

/**
 * Redux Reducer
 * A reducer will actually carry out the manipulation/mutation on the
 * state data. It should expect an "action" to be passed in with any
 * necessary target data to perform its duty.
 */

const resultReducer = (state = [], action) => {
    switch (action.type)
    {
      case 'ADD_NEW_RESULT_LINE':
        const newLine = {
          uniqueId: uuidv4(), // Ensure a unique ID.
          value: action.value // Read passed-in "new to-do" value.
        };
        // // Create a new array (with the same contents as the original.)
        const updatedState = state.slice();
        // Add this task to the state.
        updatedState.push(newLine);
        // Return the updated state value.
        return updatedState;
    }
  }
  export default resultReducer;
 