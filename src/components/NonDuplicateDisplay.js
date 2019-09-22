import React from 'react';

export default function NonDuplicateDisplay({ data }) {
    return (    
        data.map(item => <li key={Math.random(item.id)}>{Object.values(item).join(" / ")}</li>)
    )
}