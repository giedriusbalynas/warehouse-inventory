import React from "react";
import {useParams} from "react-router-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const QuantityHistory = () => {
    let id = useParams();
    let items = JSON.parse(localStorage.getItem('items')) || [];

    let mappedItems = items.filter((item) => {
        if (item.id === id.id) {
            return item;
        }
        return mappedItems;
    });

    let data = mappedItems[0].quantityHistory;

    for (let i = 0; i < data.length; i++){
        data[i] = parseFloat(data[i]);
    }
    console.log(data);

    const options = {
        title: {
            text: 'Quantity history'
        },

        yAxis: {
            title: {
                text: 'Quantity'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Quantity',
            data: data
        }]
    };

    return (
    <div>
        <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    </div>

)};

export default QuantityHistory;