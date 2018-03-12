import m from "mithril"

import Loading from './view/loading.view'

m.mount(document.body, Loading)

import store from "./store"

import Layout from './view/layout.view'
import List from './view/list.view'
import Edit from './view/edit.view'

import { getUsers } from './model/user.model'

getUsers().then(users =>
{
    store.users = users

    m.route(document.body, "/list", {
        "/list": { render: () => m(Layout, m(List)) },
        "/edit/:id": { render: vnode => m(Layout, m(Edit, vnode.attrs)) },
    })

})
