// Source - https://stackoverflow.com/a/64213710
// Posted by Boussadjra Brahim, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-10, License - CC BY-SA 4.0

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
  
  