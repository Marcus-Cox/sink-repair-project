import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map((request) => convertRequestToListElement(request)).join("") 
            }
        </ul>
    `

    return html
}