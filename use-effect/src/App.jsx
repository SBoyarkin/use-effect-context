import {useEffect, useState} from 'react'
import './App.css'
import {List} from "./components/List/List.jsx";
import {Details} from "./components/Details/Details.jsx";
const URL_USER_LIST = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
const BASE_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

function App() {
    const [user, updateUser] = useState([])
    const [profile, updateHandlerProfile] = useState([])
    const [userId, updateHandlerUserId] = useState(undefined)

    useEffect(() => {
        const userList =  fetch(URL_USER_LIST)
            .then(response => response.json())
            .then((data) => {
                updateUser(data)
            });
    }, [])

    useEffect(() => {
        if (userId !== undefined) {
        const userDetails = fetch(BASE_URL + userId + '.json')
            .then(response => response.json())
            .then((data) => {
                updateHandlerProfile(data)
            });
    }},[userId]);

    const selectUser = (e) => {
        const id = e.currentTarget.id
        console.log(e.currentTarget.id)
        updateHandlerUserId(id)
    }

  return (
    <>
        <div className='flex'>
        <List props={user} handler={selectUser} userId={userId}/>
        <Details props={profile}/>
        </div>
    </>
  )
}

export default App
