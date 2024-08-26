import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
    color: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
  };
  

function ChartBox(props: Props) {
    // const users = useSelector((state) => state.users.items.length)
    
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <span>{props.title}</span>
                </div>
                {/* <h1>{props.number}</h1> */}
                <h1>{props.number}</h1>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line 
                            type="monotone" 
                            dataKey={props.dataKey} 
                            stroke={props.color} 
                            strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                   <div className="percentage" style={{ color: props.percentage < 0 ? "red" : "limegreen"}}
                   >
                    {props.percentage}%
                    </div>
                    <div className="duration">This Month</div>
                </div>
            </div>
        </div>
    )
}

export default ChartBox