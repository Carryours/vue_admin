import Vue from 'vue'

import {
  AxiosInstance
} from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    [key: string]: any
    $axios: AxiosInstance
    $utils: object
  }
}


declare module '*.vue' {
  import Vue from 'vue'

  export default Vue
}
