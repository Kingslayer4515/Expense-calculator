import React from 'react';
import Chartbar from './Chartbar';
function Chart(props) {
    const datapointvalues=props.datapoints.map(datapt=>datapt.value);
    const totalmax=Math.max(...datapointvalues);
    return (
        <div className="chart">
            {props.datapoints.map(datapt =><Chartbar 
            key={datapt.key}
            value={datapt.value}
            maxvalue={totalmax}
            label={datapt.label}
            />)}
            
        </div>
    )
}

export default Chart;
