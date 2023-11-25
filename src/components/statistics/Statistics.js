
export const Statistics = ({ data }) => {
    return (
        <ul>
            <h1>Upload stats</h1>
            {data.map(item => {
                return (
                    <li key={item.id}>
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                    </li>
                )
            })}
        </ul>
    )
};