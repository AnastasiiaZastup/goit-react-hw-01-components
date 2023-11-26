import {SecondProgramStyle, ListForStatic, ListsLi} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
    return (
        
        <SecondProgramStyle>
            {title && <h1>{title}</h1>}
            <ListForStatic>
            {data.map(item => {
                return (
                    <ListsLi key={item.id}>
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                    </ListsLi>
                )
            })}
                </ListForStatic>
        </SecondProgramStyle>
    )
};