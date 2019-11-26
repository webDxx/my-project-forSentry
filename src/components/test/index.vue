<template>
  <div class="test-body">
    <rSelect :config="config" :ref="config.name"></rSelect>
    <img src="ttps://pubsto.ianguo.com/insure/da5120b111f727e13746d1ea2c980921.jpg" alt />
    <rLoading />
  </div>
</template>
<script>
import rSelect from './rSelect/rSelect'
import rLoading from './rLoading/index'
export default {
  components: { rSelect, rLoading },
  data () {
    return {
      config: {
        name: 'select',
        title: '年龄',
        placeholder: '请选择年龄',
        val: '2', // 默认值
        showBottomBorder: true,
        showLabel: true,
        data: [
          {
            value: 1,
            text: '10岁'
          },
          {
            value: 2,
            text: '20岁'
          },
          {
            value: 3,
            text: '30岁'
          },
          {
            value: 4,
            text: '40岁'
          }
        ] // 下拉选项
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
