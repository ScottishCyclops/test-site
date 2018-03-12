import m from "mithril"

export const getUsers = async () =>
{
    const res = await m.request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true,
    })

    return res.data
}
