import 'whatwg-fetch':
import baseUrl from '../baseUrl';


getPregunta=() =>
fetch(`${baseUrl.uri}/Add`,
method='Post',
headers:{
Accept:'aplication'
},
});