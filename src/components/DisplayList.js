import React from 'react';
import DuplicateDisplay from './DuplicateDisplay';
import NonDuplicate from './NonDuplicates';
import './DisplayList.scss'

export default function DisplayList({ duplicates, nonduplicates, data }) {
    return (
        <div className="lists">
            <div className="list-wrapper">
                <label>Duplicates</label>
                <ul>
                    <DuplicateDisplay data={duplicates}/>
                </ul>
            </div>
            <div className="list-wrapper">
                <label>Non-Duplicates</label>
                <ul>
                    <NonDuplicate data={data}/>
                </ul>
            </div>
        </div>
    )
}