import S from './List.module.css'

export const List = ({props, handler, userId}) => {
    console.log(userId)
    return(
            <>
                <div className={S.userList}>
                {props.map((item) =>
                    <div className={`${S.user} ${userId == item.id ? S.userActive : S.user}`} key={item.id}  id={item.id} onClick={handler}>
                        <div className={S.userName}>{item.name}</div>
                    </div>)}
                </div>
            </>

    )
}