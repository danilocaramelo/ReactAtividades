import React from 'react';

class List extends React.Component {

    render() {
        return(
            <ul>
                {this.props.list.map((savePoint, index) => <li key={index}>{savePoint}</li>)}
            </ul>
        );
    }
}

export default List;