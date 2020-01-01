import vue from 'vue'

export const quanjuzl = vue.directive('quanjuzl',{
inserted(el,binding){
    binding.value = binding.value || 'red'
el.style.backgroundColor = binding.value
}
})