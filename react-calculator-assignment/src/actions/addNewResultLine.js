/**
 * Redux Actions
 * Actions are "labels" for what type of functionality/manipulation
 * we will be performing/allowing on our global state data.
 * The action "names" ('type' property values), by convention, are
 * uppercase as they are representing a "constant" value.
 */
const addNewResultLine = newResultContent => {
    return{
      type: 'ADD_NEW_RESULT_LINE', //Our action "label"
      value: newResultContent //We can also transport necessary info that the reducer might need
    }
  }

  export default addNewResultLine;