import React from 'react';

export default function DuplicateDisplay({ data }) {
    return (    
        data.map(item => <li key={Math.random(item.id)}>{Object.values(item).join(" ")}</li>)
    )
}