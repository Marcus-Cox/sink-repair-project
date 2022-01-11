import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

const mainContainer = document.querySelector("#container")
//this code needs a location to render the ("#container argument")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}


render()