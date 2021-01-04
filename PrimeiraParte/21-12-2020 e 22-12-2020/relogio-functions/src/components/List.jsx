function List(props) {
    return(
        <ul>
            {props.list.map((savePoint, index) => <li key={index}>{savePoint}</li>)}
        </ul>
    );
}

export default List;