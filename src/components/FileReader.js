import React, { Component } from 'react';
import Papa from '../../node_modules/papaparse/papaparse';
import DisplayList from './DisplayList';

import './FileReader.scss';

class FileReader extends Component {
    state = {
        csvfile: undefined,
        parsedData: [],
        duplicateEntries: [],
        showResults: false,
    }

    csvInputRef = input => this.filesInput = input

    handleOnChange = ({ target }) => this.setState({ csvfile: target.files[0] })

    handleOnClick = () => {
        const { csvfile } = this.state;
        if(csvfile) {
            Papa.parse(csvfile, {
                complete: this.updateData,
                header: true,
            });

            this.setState({ showResults: true })
        } else {
            window.alert("Import a .csv file please!");
        }
    };

    updateData = (result) => {
        const csvData = result.data;

        // Create an array that has the duplicates removed
        const uniqueArray = csvData.reduce((acc, current) => {
            const compareArr = acc.find(obj => obj.email === current.email);

            if(!compareArr) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);

        // create an array from the differences between csvData and uniqueArray
        const getArrayDifference = csvData.filter(item => !uniqueArray.includes(item))

        this.setState({
            parsedData: csvData,
            duplicateEntries: getArrayDifference
        })

        console.log("duplicateArray: ", getArrayDifference)
        console.log("data: ", uniqueArray)
        return this.state.parsedData;
    };
    
    render() {
        const { parsedData, duplicateEntries, showResults } = this.state;

        return ( 
            <div className="filereader-wrapper">
                <h3>Import CSV File:</h3>
                <div className="file-import">
                    <input 
                        className='file-import-input'
                        type='file'
                        name='file'
                        ref={this.csvInputRef}
                        onChange={this.handleOnChange}
                    />
                    <button 
                        className='file-import-button'
                        onClick={this.handleOnClick}
                    >Import Now!</button>
                </div>
                { showResults 
                    ?
                    <DisplayList 
                        nonduplicates={parsedData}
                        duplicates={duplicateEntries}
                        data={parsedData} />
                    : null
                }
            </div>
        );
    }
}

export default FileReader;