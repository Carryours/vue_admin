import Vue, { VNode, ComponentOptions, AsyncComponent } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  
  namespace Page {
    interface PageRouteConfig {
      path?: string,
      name?: string,
      component: ComponentOptions<Vue> | typeof Vue | AsyncComponent,
      meta?: any
    }
  }
}
