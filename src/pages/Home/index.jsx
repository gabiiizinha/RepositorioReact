import { useEffect, useState } from "react"

export const Home = () =>{
    const [infos, setInfos] = useState([])
    useEffect(()=>{
        const getInfos = async()=>{
            const response = fetch('https;//api.github.com/users/gabiiizinha')
            const data = (await response).json()
            setInfos(data)
            console.log(data)
        }
        getInfos()
    },[])
    return(
    <>
    <Infos />
    avatar_url = {infos.avatar_url}
    userName = {infos.name}
    login = {infos.login}
    public_repos = {infos.public_repos}
    followers = {infos.followers}
    following = {infos.following}
    html_url = {infos.html_url}


    
    </>
    )
}