import Vueditor from './components/Editor.vue'

if (typeof window !== 'undefined' && window.Vue) {
    Vue.component('vueditor', Editor)
}

export { Vueditor }

export default Vueditor