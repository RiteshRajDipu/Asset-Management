import "./chart.css"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const Chart = ({data, dataKey, title, grid}) => {
    // console.log({dataKey});


    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#6d1b7b" />
                    <Line type="monotone" dataKey={dataKey} stroke="#6d1b7b" />
                    <Tooltip />
                 {grid &&  <CartesianGrid strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart