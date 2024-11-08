const btrconsole = require("btrconsole")

var nullbyte = {
    "debug":{
        "test":test,
        "get_version":get_version
    },
    "main":{
        "sys":{
            "print":print
        }
    },
    "components":{
        "welcome":"Thank you for using nullbyte.js as your needed module.\nYou are running version ALPHA on regular.",
        "warning":"REGULAR NULLBYTE IS INTENDED FOR WEBSITE USE AND SHALL NOT BE USED IN JS PROJECTS AS NULLBYTE REGULAR WAS NOT MADE FOR JAVASCRIPT (VIEW NULLBYTE.MODULE.MD THAT COMES WITH THE NULLBYTE PACKET). IF YOU WANT TO FIND A MODIFIED INSTANCE, VISIT https://tinyurl.com/certiesweb/nullbyte.js/mod/"
    }
}

console.log(nullbyte.components.welcome)
console.warn(nullbyte.components.warning)

// main functions

function test() {
    console.log("works fine")
}
function print(value) {
    console.log(value)
}
function get_version() {
    console.log("ALPHA")
}
function sendLocalChatMessage() {
    console.warn("WARN - Make sure you have a 'user' and 'message' id input plus a 'chat' element (like a paragraph with the id of chat)")
    if (document.getElementById('user') && document.getElementById('message') && document.getElementById('chat')) {
        console.log("Perfect to proceed")
        document.getElementById('chat').innerHTML=`${document.getElementById('chat').innerHTML}${document.getElementById('user').value}: ${document.getElementById('message').value}<br>`
        document.getElementById('message').value = ''
    } else {
        console.error("ERR - ElementNotFound (ENF)\nWe couldn't find either a user/message input, chat box or maybe even 2 or all of them.")
    }
}
function getElements() {
    console.log(document.children)
}
module.exports =  {
    test,
    print,
    get_version
}