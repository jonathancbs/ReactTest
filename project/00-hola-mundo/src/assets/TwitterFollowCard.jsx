import { useState } from "react"

export function TwitterFollowCard({ children, userName, name = `hola`,  formatUserName, initialIsFollowing }) {

    /*const state = useState(false)
    const isFloowing = state[0]
    const setIsFloowing = state[1]
    */
    const handlerClick = ()=>{
        setIsFollowing(!isFollowing)
    }
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    const textButton = isFollowing ? "Siguiendo" : "seguir"
    const classButton = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    return (
        <article className='tw-followCard' >
            <header className='tw-followCard-header'>
                <img src={imageSrc} alt="El avatar de midudev" className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName' >{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handlerClick}>
                    {textButton}
                </button>
            </aside>
        </article>
    )
}