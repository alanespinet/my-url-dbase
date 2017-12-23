const defaultState = {
  urls: [
    {
      title: 'url1',
      url: 'url1.thisproject.com',
      description: 'this is the url1'
    }, {
      title: 'url2',
      url: 'url2.thisproject.com',
      description: 'this is the url2'
    }
  ],

  selected: {
    title: 'urlSelected',
    url: 'urlselected.thisproject.com',
    description: 'this is the urlSelected'
  }
}

export default ( state = defaultState, action ) => {
  switch( action.type ){

    case 'GET_URL':
      return {
        ...state,
        selected: state.urls.filter( (url) => url.title === action.title )[0]
      }

    case 'ADD_URL':
      return {
        ...state,
        urls: state.urls.concat(action.url)
      }

    case 'DELETE_URL':
      return {
        ...state,
        urls: state.urls.filter( (url) => url.title !== action.title )
      }

    case 'SET_URLS':
      return {
        ...state,
        urls: action.urls
      }


    default:
      return state;
  }
}
