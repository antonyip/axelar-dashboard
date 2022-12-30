function ConvertToUpDownBarLineChart(data, sliceTime) {
    const array = data.rows;
    const xAxis = []
    const yAxis = []
    const yAxis2 = []
    const yAxis3 = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (sliceTime){
            xAxis.push(element[0].slice(0, 10));
        } else {
            xAxis.push(element[0]);
        }
        yAxis.push(element[1]);
        yAxis2.push(element[2]);
        yAxis3.push(element[3]);
    }
    return {xAxis, yAxis, yAxis2, yAxis3}
}

export default ConvertToUpDownBarLineChart;
