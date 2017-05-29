import 'whatwg-fetch';
import baseUrl from '../baseUrl';


const getPregunta = () =>
    fetch(`${baseUrl.uri}/add`, {
        method = 'Post',
        headers: {
            Accept: 'aplication/JSON'
        },
    });