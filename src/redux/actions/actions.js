import database from '../../firebase/firebase';
const urlsdb = database.ref().child('urls');
const usersdb = database.ref().child('users');

export const getUrl = (title) => ({
  type: 'GET_URL',
  title
});


const addUrl = (url) => ({
  type: 'ADD_URL',
  url
});

export const startAddUrl = (purl) => {
  return (dispatch, getState) => {

    const uid = getState().auth.uid;
    const title = purl.title;
    const urlObj = {
      url: purl.url,
      description: purl.description
    };

    usersdb.child(uid).child(`urls/${title}`).set(urlObj).then( () => {
      dispatch( addUrl({
          title: title,
          ...urlObj
      }) );
    });
  };
};


const deleteUrl = (title) => ({
  type: 'DELETE_URL',
  title
});

export const startDeleteUrl = (title) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    usersdb.child(uid).child(`urls/${title}`).remove().then( () => {
      dispatch( deleteUrl(title) );
    });
  }
}


const setUrls = (urls) => ({
  type: 'SET_URLS',
  urls
});


export const startSetUrls = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    // fetch urls data from firebase
    return usersdb.child(`${uid}/urls`).once('value')
      .then( (snapshot) => {
        const urls = [];

        // loop over the received urls and fill urls array
        snapshot.forEach( (childSnapshot) => {
          urls.push({
            'title': childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // console.log(urls);

        // call setUrls
        dispatch( setUrls(urls) );
      });
  }
};
