const fs = require('fs')
const rls = require('readline-sync')

var config = {
    "config_name":"test",
    "version":"alpha", // DO NOT CHANGE
    "user":"guest", //change to your liking
    "config_port":"5500", // change to your liking
    "config_ip":"config.ip", // change to your liking. view list of domains in DOMAIN.md
    "config_location":"EU", // change to EU (general EU), US, AS (general Asia), view more in LOCATION.md
    format:null
}

console.log("Starting...")
console.log("Connecting to port " + config["config_port"] + " as " + config["user"])
var format = rls.question("Select a format:\n[1] VCF\n[2] NBSF\n[3] DSF\n>")
if (format == 1) {
    console.log("Selected VCF as format")
    console.warn("WARN This format is intended for developer use")
    config.format = "VCF" // very creative format
} else if (format == 2) {
    console.log("Selected NBSF as format")
    console.warn("WARN This format uses Null Byte System in which empty spots are filled with /0/+ (a Null Byte in this scenario) during creation.")
    config.format = "NBSF" // null byte system format
} else if (format == 3) {
    console.log("Selcted DSF as format")
    console.info("INF This is a generic and dynamic format for Dynamic System and regular use.")
    config.format = "DSF" // dynamic system format
}
console.log("Starting process...")
if (config.format == "VCF") {
    console.log("Creating HTML based with VCF...")
fs.writeFile('index.html', `<head><title>${config["config_name"]}</title><style>body  { font-family: "Arial"; }</style></head><body><h1>VCF config index</h1><h3>You're using VeryCreative Format. This format allows you to:</body><li>Test and experiment</li><li>Show off your HTML knowledge</li><h3>So start editing this HTML file and go crazy!</h3><h6 style="text-align: right;">Alpha Version</h6>`, (nuh) => {
    if (nuh) {
        console.error(`FS_ERROR: ${nuh}`)
    }
})
} else if (config.format == "NBSF") {
    fs.writeFile('index.html', `<head><title>${config["config_name"]}</title><style>body  { font-family: "Arial"; }</style></head><body><h1>NBSF config index</h1><h3>You're using NulByteSystem Format. This format uses NULLBYTE. Make sure you have nullbyte.js installed or follow instructions in your NBSF.md file</body><h6 style="text-align: right;">Alpha Version</h6>\n<script src="nullbyte.js"></script>`, (nuh) => {
        if (nuh) {
            console.error(`FS_ERROR: ${nuh}`)
        }
    })
} else if (config.format == "DNS") {
    fs.writeFile('index.html', `<head>\n<title>${config["config_name"]}</title>\n<style>body  { font-family: "Arial"; }</style>\n</head>\n<body>\n<h1>DNS config index</h1><h3>You're using Dynamic System Format. Here's a list of things you can do:</body>\n<li>Optional dynamic.js</li>\n<li>Experiments</li>\n<h6 style="text-align: right;">Alpha Version</h6>`, (nuh) => {
        if (nuh) {
            console.error(`FS_ERROR: ${nuh}`)
        }
    })
}
console.log("Created successfully")
console.info("INF Delete the file after each use to not cause any conflicts (like force rewrite) and save space")
