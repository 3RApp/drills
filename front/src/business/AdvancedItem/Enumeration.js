export const Enumeration = ({ title, items }) => {
    return (
        <div className="enumeration">
            <h4>{title}</h4>
            <ol>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index} className="enumeration-item">
                                {item}
                            </li>
                        );
                    })
                }
            </ol>
        </div>
    );
};