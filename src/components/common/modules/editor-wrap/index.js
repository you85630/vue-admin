import VmEditor from './editor.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VmEditor', VmEditor)
}

export default VmEditor
