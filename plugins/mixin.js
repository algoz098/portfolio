
import Vue from 'vue'

Vue.mixin({
    methods: {
        env(){
            if(window.location.href.includes('/portfolio/')){
                return ''
            }

            return '/'
        }
    }
})
  