function PhoenixLCDExtractTime(data) {
    var stringText = new Date(data.blocks[0].block_timestamp/1000000)
    return stringText.toLocaleDateString() + " " + stringText.toLocaleTimeString() ;
}

export default PhoenixLCDExtractTime;
