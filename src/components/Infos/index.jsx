export const Infos = ( {avatar_url, userName, login, public_repos, followers, following, html_url}) =>{
  
    return(
        <>
    <img scr={avatar_url} alt={userName} />
    <h1>{userName}</h1>
    <p>{login}</p>
    <p>{public_repos} repositórios criados</p>
    <p>{followers} seguidores, seguindo {following} mebros</p>
    <a href={html_url}>Repositório</a>
        </>
    )
}
