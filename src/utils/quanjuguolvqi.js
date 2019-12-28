//这是全局过滤器
import vue from 'vue'//

export const quanjuglq = vue.filter('glq', (tiem, p) => {
    p = p || '-'
    let nian = tiem.getFullYear()//年
    let yue = tiem.getMonth() + 1//月
    let ri = tiem.getDate()//日
    let riqi = `${nian}${p}${yue}${p}${ri}`
     return riqi
})