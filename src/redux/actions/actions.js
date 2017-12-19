export const getUrl = (title) => ({
  type: 'GET_URL',
  title
});


export const addUrl = (url) => ({
  type: 'ADD_URL',
  url
});


export const deleteUrl = (title) => ({
  type: 'DELETE_URL',
  title
});
