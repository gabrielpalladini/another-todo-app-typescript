import React from 'react';

interface HeaderProps {
    title?: string;
}

export default function Header({title = 'The Todo List'}: HeaderProps) {

    return (
        <>
            <h1> {title} </h1>
        </>
    )
}