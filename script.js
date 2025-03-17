'use strict'
const API='https://jsonplaceholder.typicode.com/users'
const container=document.querySelector('.container')
const fetchUser=(resource)=>{
    const data=fetch(resource)
    console.log(data);
    
}
fetchUser(API)