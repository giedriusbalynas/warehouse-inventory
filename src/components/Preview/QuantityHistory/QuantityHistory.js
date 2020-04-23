import React from "react";
import {useParams} from "react-router-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {connect} from 'react-redux';

const QuantityHistory = (props) => {
    let id = useParams();
    let items = props.items || [];
    console.log(props);
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

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

export default connect(mapStateToProps)(QuantityHistory);