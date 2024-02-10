import router from "@/router";
import { getToken } from "@/composables/auth"
import { toast } from "@/composables/util"
import store from "@/store/index.js";


// 全局前置守卫
router.beforeEach(async (to, from, next) => {

    const token = getToken()

    // 没有登良路，强制跳转会登录页
    if (!token && to.path != "/login") {

        toast("请先登录", "error")

        return next({ path: "/login" })
    }
    // 防止重复登录
    if (token && to.path === "/login") {
        toast("请勿重复登录", "error")
        return next({ path: from.path ? from.path: "/" })
    }

    // 如果用户登录了，自动获取用户信息，并存在vuex当中
    if (token) {
        await store.dispatch("getinfo")
    }
    next()
})