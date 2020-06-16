import React from 'react';
import './ResultsComponent.css';

/**
 *
 * @param {results} Send the results array into this variabl
 */

export default function ResultsComponent({ results=[] }){
    console.log("from result component");
    console.log(results);
    return (
        <div className="results">
            {(results.map((result, id) => (
                <div className="result" key={result.id}>
                    <p className="result-name" alt={`${result.name} ${result.model}`}>{result.name} {result.model}</p>
                    <hr />
                    <div className="result-item">
                        <div className="item-one">State</div>
                        <div>{result.state}</div>
                    </div>
                    <div className="result-item">
                        <div className="item-one">Type</div>
                        <div>{result.phone_type}</div>
                    </div>
                </div>
            )))}
        </div>
    )
}