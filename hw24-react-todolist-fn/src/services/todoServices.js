import { TODO_API_URL } from '../config';

export function getList() {
    return fetch(TODO_API_URL).then((res) => res.json());
}

export function createElement(el) {
    return fetch(TODO_API_URL, {
        method: 'POST',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function deleteElement(id) {
    return fetch(TODO_API_URL + id,{
        method: 'DELETE',
    }).then((res) => res.json());
}

export function updateElement(el) {
    return fetch(TODO_API_URL + el.id, {
        method: 'PUT',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
