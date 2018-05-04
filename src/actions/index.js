//Action creator which will return an Action

export const selectLibrary = (libraryId) => {
  //Action
  return {
    type: 'select_library',
    payload: libraryId
  };
};
