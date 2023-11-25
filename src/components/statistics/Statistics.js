
export const Statistics = ({ title, data }) => {
    return (
        <ul>
            {data.map(item => {
                return (
                    <li key={item.id}>
                        <span>{label}</span>
                        <span>{percentage}%</span>
                    </li>
                )
            })}
        </ul>
    )
};