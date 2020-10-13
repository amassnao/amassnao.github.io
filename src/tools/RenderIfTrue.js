import React from 'react'

export default function (props) {
    if (!props.render)
        return (<></>)
    return (<>{ props.children }</>)
}