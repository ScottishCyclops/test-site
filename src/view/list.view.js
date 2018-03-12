import m from "mithril"
import store from "../store"

export default {
    view: () => m(".user-list", store.users
        .map(user => m("a.user-list-item", {
            href: "/edit/" + user.id,
            oncreate: m.route.link
        }, `${user.firstName} ${user.lastName}`)))
}
