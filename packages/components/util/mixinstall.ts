import type { App } from "vue"
export default (comp: any) => {
    comp.install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp)
    }
    return comp
}