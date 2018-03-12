import m from "mithril"
import store from "../store"

let currentUser = 0

export default {
    oninit: vnode => {
        const id = parseInt(vnode.attrs.id)
        console.log(id)

        for(const user in store.users) {
            if(store.users[user].id === id) {
                currentUser = user
                break
            }
        }
    },
    view: () => m("form", [
        m("label.label", "First name"),
        m("input.input[type=text][placeholder=First name]", {
            oninput: m.withAttr("value", value => store.users[currentUser].firstName = value ),
            value: store.users[currentUser].firstName,
        }),
        m("label.label", "Last name"),
        m("input.input[type=text][placeholder=Last name]", {
            oninput: m.withAttr("value", value => store.users[currentUser].lastName = value ),
            value: store.users[currentUser].lastName,
        })
    ])
}
