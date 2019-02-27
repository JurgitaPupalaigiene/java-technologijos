import React from 'react';

var KaiNiekoNera = (props) => {
    var goNera = () => props.history.push("/");
    return <div>Labai gaila, nieko neradome ...
    <button onClick={goNera}>Grizti i pradzia</button></div>;
};

export default KaiNiekoNera;