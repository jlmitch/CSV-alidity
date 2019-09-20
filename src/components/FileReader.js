import React, { Component } from 'react';
import Papa from '../../node_modules/papaparse/papaparse'

class FileReader extends Component {
    state = {
        csvfile: undefined,
    }

    csvInputRef = input => this.filesInput = input

    handleOnChange = ({ target }) => this.setState({ csvfile: target.files[0] })

    handleOnClick = () => {
        const { csvfile } = this.state;

        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true,
        });
    };

    updateData(result) {
        const data = result.data;

        console.log("data: ", data)
    };
    
    render() {
        return ( 
            <div>
                <h2>Import CSV File:</h2>
                <input 
                    className='csv-input'
                    type='file'
                    name='file'
                    ref={this.csvInputRef}
                    onChange={this.handleOnChange}
                />
                <button 
                    className='import-button'
                    onClick={this.handleOnClick}
                >Import Now!</button>
            </div>
        );
    }
}

export default FileReader;