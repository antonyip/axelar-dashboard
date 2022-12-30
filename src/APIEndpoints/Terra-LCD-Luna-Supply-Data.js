import axios from "axios";

async function TerraLCDSupply() {
    const res = await axios.get("https://api.nearblocks.io/v1/stats");
    return res.data;
}

export default TerraLCDSupply