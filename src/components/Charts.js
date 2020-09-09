import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChartData :{
                labels : ['Nakuru','Nairobi', 'Mombasa', 'Nyeri', 'Karatina', 'Meru','Kisii'],
                datasets:[ {
                    label: 'Population',
                    data: [
                        23845,
                        45845,
                        34855,
                        76889,
                        56878,
                        98876,
                        87865
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 192, 192, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 102, 255, 0.6)',
                        'rgba(255, 102, 255, 0.6)'
                    ]
                }]
            },
        }

    }
    render() {
        return (
            <div>
                <Bar
                    data={this.state.ChartData}
                    width={300}
                    height={300}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text:"Largest Cities in Kenya",
                            fontSize:20
                        },
                        legends: {
                            display: true,
                            position:"right"
                        }
                    }}
                />
            </div>
        );
    }
}

export default Charts;