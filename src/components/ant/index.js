import { createApp } from 'vue'
import {
  Card,
  message
} from 'ant-design-vue'

const app = createApp()
const components = [
  Card,
  message
]

message.config({ maxCount: 1 })

// Vue.prototype.$message = message
// Vue.prototype.$notification = notification
// Vue.prototype.$info = Modal.info
// Vue.prototype.$success = Modal.success
// Vue.prototype.$error = Modal.error
// Vue.prototype.$warning = Modal.warning
// Vue.prototype.$confirm = Modal.confirm
// Vue.prototype.$destroyAll = Modal.destroyAll

const install = function(app) {
  components.map(component => {
    app.use(component)
  })

}

if (typeof window !== 'undefined') {
  install(app)
}