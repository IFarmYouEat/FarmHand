import React, { useState, useEffect } from 'react';
import PriceFormat from '../NumberFormatting/PriceFormat';
import NumberFormat from '../NumberFormatting/NumberFormat';
import './SortByYear.css';

function SortByYear({ data }) {

    const [sortedData, setSortedData] = useState([])

    // comb through data to pull out unique years.
    useEffect(() => {
        const uniqueYears = [... new Set(data.map(item => item.year))];
        const sorted = uniqueYears.map(year => ({
            year,
            items: data.filter(item => item.year === year)
        }));
        setSortedData(sorted)
    }, [data])



    console.log('SortByYear result:', sortedData)
    return (

        <div>
            {sortedData.map(yearData => (
                <div key={yearData.year} className="table-wrapper">
                    <h2 className="table-year">{yearData.year}</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Crop</th>
                                <th>Total Yield</th>
                                <th>Contracted</th>
                                <th>Available</th>
                                <th>Average Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {yearData.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.crop}</td>
                                    <td><NumberFormat number = {item.yield} /></td>
                                    <td><NumberFormat number = {item.contracted} /></td>
                                    <td><NumberFormat number = {item.available} /></td>
                                    <td><PriceFormat price = {item.average_price} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>



    )
}

export default SortByYear;