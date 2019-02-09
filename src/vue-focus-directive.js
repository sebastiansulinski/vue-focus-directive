import Vue from 'vue'

export default Vue.directive('focus', {
    inserted: (element, binding) => {
        if (binding.value === true) {
            element.focus();
        }
    }
})