import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";
import PropTypes from 'prop-types';

function ChartBox(props) {
    const { color, title, dataKey, number, percentage, chartData } = props;

    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <span>{title}</span>
                </div>
                <h1>{number}</h1>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <div className="percentage" style={{ color: percentage < 0 ? "red" : "limegreen" }}
                    >
                        {percentage}%
                    </div>
                    <div className="duration">This Month</div>
                </div>
            </div>
        </div>
    )
}

ChartBox.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    percentage: PropTypes.number.isRequired,
    chartData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default ChartBox;