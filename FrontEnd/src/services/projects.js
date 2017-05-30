import 'whatwg-fetch';
import baseUrl from '../baseUrl';


const getPregunta = () =>
    fetch(`${baseUrl.uri}/add`, {
        method = 'Post',
        headers: {
            Accept: 'aplication/JSON'
        },
    });
const login = () =>
    fetch(`${baseUrl.uri}/login`, {
        method = 'Post',
        headers: {
            Accept: 'aplication/JSON'
        },
    });