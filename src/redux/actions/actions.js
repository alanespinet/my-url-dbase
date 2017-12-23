import database from '../../firebase/firebase';
const urlsdb = database.ref().child('urls');

export const getUrl = (title) => ({
  type: 'GET_URL',
  title
});


const addUrl = (url) => ({
  type: 'ADD_URL',
  url
});

export const startAddUrl = (purl) => {
  return (dispatch) => {

    const title = purl.title;
    const urlObj = {
      url: purl.url,
      description: purl.description
    };

    urlsdb.child(title).set(urlObj).then( () => {
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
  return (dispatch) => {
    urlsdb.child(title).remove().then( () => {
      dispatch( deleteUrl(title) );
    });
  }
}


const setUrls = (urls) => ({
  type: 'SET_URLS',
  urls
});


export const startSetUrls = () => {
  return (dispatch) => {

    // fetch urls data from firebase
    return urlsdb.once('value')
      .then( (snapshot) => {
        const urls = [];

        // loop over the received urls and fill urls array
        snapshot.forEach( (childSnapshot) => {
          urls.push({
            'title': childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // call setUrls
        dispatch( setUrls(urls) );
      });
  }
};
