import m from 'mithril'

export default {
    view: vnode => m("main.layout", [
        m("nav.menu", [
            m("a", { href: "/list", oncreate: m.route.link }, "Users")
        ]),
        m("section", vnode.children),
    ])
}
