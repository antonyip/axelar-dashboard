function PhoenixLCDExtractSupply(data) {

    
    const res = Math.round(data.stats[0].total_supply / 1000000000 / 1000000000 / 1000000)
    return res
}

export default PhoenixLCDExtractSupply;