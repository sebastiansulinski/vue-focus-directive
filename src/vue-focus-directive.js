import Vue from 'vue'

export const FocusDirective = {
    inserted: (element, binding) => {
        if (binding.value === true) {
            element.focus();
        }
    }
};

Vue.directive('focus', FocusDirective);