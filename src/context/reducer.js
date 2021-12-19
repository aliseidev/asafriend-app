const Reducer = (state, action) => {
  switch (action.type) {
    /* This update the single reader using its ID */
    case "UPDATE_READER":
      return {
        ...state,
        readers: state.readers.map(reader => {
          if (reader.id === action.reader.id)
            return { ...reader, ...action.reader };
          return { ...reader };
        }),
      };
      
    /* After everyone has finished their chapter, we need to reset the "DONE" status for all of 'em */
    case "RESET_DONE":
      return {
        ...state,
        readers: state.readers.map(reader => {
          return { ...reader, done: false };
        }),
      };

    /* This pushes all the readers to the immediate next chapter (+ 1 hizb) */
    case "NEXT_KHATMA":
      return {
        ...state,
        readers: state.readers.map(reader => {
          if (reader.hizb === 60) return { ...reader, hizb: 1 };
          return { ...reader, hizb: reader.hizb + 1 };
        }),
      };

    /* This pushes all the readers to the immediate previous chapter (- 1 hizb) for any reason it is needed */
    case "PREV_KHATMA":
      return {
        ...state,
        readers: state.readers.map(reader => {
          if (reader.hizb === 1) return { ...reader, hizb: 60 };
          return { ...reader, hizb: reader.hizb - 1 };
        }),
      };

    case "INIT":
      return action.readers;

    default:
      return state;
  }
};

export default Reducer;
