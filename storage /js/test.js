//import { ADStorage } from "./master";   

//const storage = new ADStorage();


storage.localStorageAction('add', 'alex', 'some information about alex');

const data = storage.localStorageAction("get", 'test');
//alert(data);

const data1 = storage.localStorageAction("get", 'alex');
//alert(data1);

const user = {
    name: 'Alex',
    title: 'Software Engineer',
    email: 'test@email.com'
};

userText = JSON.stringify(user);

storage.localStorageAction('add', 'user', userText);

const userTextFromStorage = storage.localStorageAction('get', 'user');

const userFromStorage = JSON.parse(userTextFromStorage);

alert(userFromStorage.name);

