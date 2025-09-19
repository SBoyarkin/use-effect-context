import {useEffect, useState} from "react";

import S from './Details.module.css'
export const Details = ({props}) => {
    const {avatar, id, name, details} = props
    if (id) {
        return(
            <>
                <div className={S.profile}  key={id}>
                    <img className={S.avatar} src={avatar}></img>
                    <div className={S.name}>{name}</div>
                    <div className={S.item}> City: {details.city}</div>
                    <div className={S.item}>Company: {details.company}</div>
                    <div className={S.item}>Position: {details.company}</div>
                </div>
            </>
        )}
}