import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

const PriceHistory = (props) => {
    let id = useParams();
    let items = props.items || [];

    let mappedItems = items.filter((item) => {
        if (item.id === id.id) {
            return item;
        }
        return mappedItems;
    });

    let data = mappedItems[0].priceHistory;
    for (let i = 0; i < data.length; i++){
        data[i][1] = parseFloat(data[i][1]);
      }

    const options = {
        title: {
            text: 'Price history'
        },

        xAxis: {
            type: 'datetime',
            title: {
                text: 'Time'
            },
        },

        yAxis: {
            title: {
                text: 'Price(\u20AC)'
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
            name: 'Price',
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

export default connect(mapStateToProps)(PriceHistory);