import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {
    const format = (userName) => {
        return `@${userName}`
    }
    const formatUserName = (userName) => {
        return `@${userName}`
    }
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo H.',
            isFollowing: true
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hdez',
            isFollowing: true
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: false
        },
        {
            userName: 'jonathancbs',
            name: 'Jonathan',
            isFollowing: false
        }


    ]
    const [userName, setUserName] = useState('jonathancbs')
    const [name, setName] = useState('Jonathan Burga')
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={`test${userName}`}
                        name={name}
                        userName={userName}
                        initialIsFollowing={true}
                        formatUserName={formatUserName}
                    >
                        Jonathan Carlos Burga
                    </TwitterFollowCard>
                ))
            }



        </section>
    )
}
