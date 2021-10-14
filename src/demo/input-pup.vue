<template>
  <div>
       <inputcom class="search-input" type="search" placeholder="请输入验证码" :value.sync="code" @input="getcode" />
  </div>
</template>

<script>
import inputcom from './input-com'
export default {
    data () {
        return{
            code:''
        }
    },
    components: {
        inputcom
    },
    methods:{
        getcode(){
            console.log('bbb'+this.code)
            this.$emit('getcode',this.code)
        }
    }
}
</script>

<style>

</style>