<template>
  <div>
       <input v-model="code" @input="outInput"/>
  </div>
</template>

<script>
export default {
    // data () {
    //     return{
    //         codenum:this.code
    //     }
    // },
    props:{
        code:{
            type:String,
            default:''
        }
    },
    // watch:{
    //     value(newval, oldval){
    //         this.code=newval;
    //     }
    // },
    // created() {
    //         this.code = this.value
    //     },
    methods:{
        outInput(){
            console.log('ccc'+this.code)
            this.$emit('update:value',this.code)
            this.$emit('input',this.code)
        }
    }
}
</script>

<style>

</style>