<template>
  <div style="padding:10px">
    <img src="https://static.rong360.com/upload/png/2f/ce/2fce4d7354faffb6ee298a264fbb53ec.png" alt />
    <Table border :columns="columns12" :data="data6" :show-header="false">
      <template slot-scope="{ row }" slot="name">
        <span>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row }" slot="product1">
        <span
          v-if="row.product1.value"
          type="primary"
          size="small"
          style="margin-right: 5px"
        >{{row.product1.value}}</span>
        <span v-else>{{row.product1}}</span>
      </template>
      <template slot-scope="{ row }" slot="product2">
        <span
          v-if="row.product2.value"
          type="primary"
          size="small"
          style="margin-right: 5px"
        >{{row.product2.value}}</span>
        <span v-else>{{row.product2}}</span>
      </template>
      <template slot-scope="{ row }" slot="product3">
        <span
          v-if="row.product3.value"
          type="primary"
          size="small"
          style="margin-right: 5px"
        >{{row.product3.value}}</span>
        <span v-else>{{row.product3}}</span>
      </template>
      <template slot-scope="{ row }" slot="product4">
        <span
          v-if="row.product4.value"
          type="primary"
          size="small"
          style="margin-right: 5px"
        >{{row.product4.value}}</span>
        <span v-else>{{row.product4}}</span>
      </template>
    </Table>
  </div>
</template>
<script>
import tableData from './tableData2.js'
export default {
  data () {
    return {
      columns12: [
        {
          title: 'Name',
          slot: 'name',
          width: 70,
          fixed: 'left',
          className: 'demo-table-info-column'
        },
        {
          title: 'product1',
          slot: 'product1',
          width: 80
        },
        {
          title: 'product2',
          slot: 'product2',
          width: 80
        },
        {
          title: 'product3',
          slot: 'product3',
          width: 80
        },
        {
          title: 'product4',
          slot: 'product4',
          width: 80
        }
      ],
      data6: tableData
    }
  },
  mounted () {
    // console.log(window.aaa.ccc())
    this.axios
      .get('/user/login', {})
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<style >
.ivu-table {
  font-size: 12px;
  color: #333;
}
.ivu-table td[class^="ivu-table-column"] {
  height: auto;
  padding: 6px 0;
}
.ivu-table .ivu-table-cell {
  padding: 0 6px;
}
.ivu-table td.demo-table-info-column {
  background-color: #fafafa;
}
.ivu-table-fixed,
.ivu-table-fixed-right {
  box-shadow: none;
}
.ivu-table-border td,
.ivu-table-border th {
  border-right: 1px solid rgba(236, 236, 236, 0.5);
}
.ivu-table td,
.ivu-table th {
  border-bottom: 1px solid rgba(236, 236, 236, 0.5);
}
.ivu-table-wrapper-with-border {
  border: 1px solid rgba(236, 236, 236, 0.5);
  border-bottom: 0;
  border-right: 0;
}
table {
  border-color: rgba(236, 236, 236, 0.5);
}
.ivu-table:before {
  background-color: rgba(236, 236, 236, 0.5);
}
.ivu-table-border:after {
  background-color: rgba(236, 236, 236, 0.5);
}
</style>
