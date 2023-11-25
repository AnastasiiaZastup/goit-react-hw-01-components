import {LastTask, TitleLi} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <LastTask>
            <table>
                <thead>
                    <tr>
                        <TitleLi>Type</TitleLi>
                        <TitleLi>Amount</TitleLi>
                        <TitleLi>Currency</TitleLi>
                    </tr>
                </thead>
                <tbody>
                
                    {transactions.map(items => {
                        return (
                            <tr key={items.id}>
                                <td>{items.type}</td>
                                <td>{items.amount}</td>
                                <td>{items.currency}</td>

                            </tr>
                    

                        )
                    })}
                </tbody>
            </table>
        </LastTask>
    )
};