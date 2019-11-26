<template>
  <div ref="wraper" style="width:100%">
    <h2>element-ui</h2>
    <!-- <el-table
      v-cloak
      :data="mytableData"
      border
      style="width: 100%"
      :cell-style="finalCellStyle"
      :highlight-current-row="false"
    >
      <el-table-column :fixed="true" :key="1" prop="name" width="80" label="title"></el-table-column>
      <el-table-column prop="product1" label="产品1" width="100">
        <template slot-scope="scope">
          <div
            v-if="scope.row.module=='mild_disease_display' || scope.row.module=='severe_disease_display'"
          >
            <span @click="open(scope.row.product1)">{{ scope.row.product1.value }}</span>
          </div>
          <div v-else>
            <span>{{scope.row.product1}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="product2" :key="2" label="产品2" width="100">
        <template slot-scope="scope">
          <div
            v-if="scope.row.module=='mild_disease_display' || scope.row.module=='severe_disease_display'"
          >
            <span>{{ scope.row.product2.value }}</span>
          </div>
          <div v-else>
            <span>{{scope.row.product2}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="product3" :key="3" label="产品3" empty-text="-" width="100">
        <template slot-scope="scope">
          <div
            v-if="scope.row.module=='mild_disease_display' || scope.row.module=='severe_disease_display'"
          >
            <span>{{ scope.row.product3.value }}</span>
          </div>
          <div v-else>
            <span>{{scope.row.product3}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="product3" :key="4" label="产品4" width="100">
        <template slot-scope="scope">
          <div
            v-if="scope.row.module=='mild_disease_display' || scope.row.module=='severe_disease_display'"
          >
            <span>{{ scope.row.product3.value }}</span>
          </div>
          <div v-else>
            <span>{{scope.row.product3}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>-->
    <br />
    <h2>iview</h2>
    <Table border :columns="columns2" :data="data6" :show-header="false" ref="tableview">
      <template slot-scope="{ row }" slot="name">
        <span>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row }" slot="product1">
        <span
          v-if="row.product1.value"
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="open(row.product1)"
        >{{row.product1.value}}</span>
        <span v-else @click="open(row.product1)">{{row.product1}}</span>
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
    <br />
  </div>
</template>
<script>
import tableData from './tableData2.js'
import * as Sentry from '@sentry/browser'
export default {
  data () {
    return {
      mytableData: tableData,
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data5: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗',
          date: '2016-10-01'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          date: '2016-10-02'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          date: '2016-10-04'
        }
      ],
      tdWidth: {
        tbody: 120,
        thead: 64
      },
      columns2: [],
      columns12: [
        {
          title: 'Name',
          slot: 'name',

          fixed: 'left',
          className: 'demo-table-info-column'
        },
        {
          title: 'product1',
          slot: 'product1'
        },
        {
          title: 'product2',
          slot: 'product2'
        },
        {
          title: 'product3',
          slot: 'product3'
        },
        {
          title: 'product4',
          slot: 'product4'
        }
      ],
      data6: tableData,
      show: false
    }
  },
  created () {
    // console.log(new Date().getTime())
    // for (let key in tableData[0]) {
    //   tableData.forEach((item, index) => {
    //     let obj = this.mytableData.find(i => i.module === key)
    //     if (obj) {
    //       obj = Object.assign(obj, { [`product${index}`]: item[key].data })
    //     } else {
    //       this.mytableData.push({ name: item[key].title, module: key, [`product${index}`]: item[key].data })
    //     }
    //   })
    // }
    // console.log(new Date().getTime())
    // console.log(this.mytableData)
    // this.mytableData = tableData

  },
  mounted () {
    // alert('111')
    // document.querySelector('thead').style.display = 'none'
    // setTimeout(() => {
    //   let m = document.$refs.wraper
    //   m.style.display = 'none'
    //   m.style.display = 'block'
    // })
    // setTimeout(() => {
    //   this.show = true
    // }, 1000)
    // alert(document.$refs.wraper)
    console.log(this.$refs.tableview)
    this.tdWidth = this.countWidth(this.$refs.tableview, 4)
    console.log(this.tdWidth)
    this.columns2 = this.columns12.map((item, index) => {
      if (index === 0) {
        return { ...item, width: this.tdWidth.thead }
      }
      return { ...item, width: this.tdWidth.tbody }
    })
    console.log(this.columns12)
  },
  methods: {
    countWidth (table, length) {
      let tdWidth = {}
      let cwidth = table.clientWidth
      switch (length) {
        case 2:
          tdWidth.tbody = cwidth * 0.38
          tdWidth.thead = cwidth * 0.24
          break
        case 3:
          tdWidth.tbody = cwidth * 0.26
          tdWidth.thead = cwidth * 0.22
          break
        case 4:
          tdWidth.tbody = cwidth * 0.24
          tdWidth.thead = cwidth * 0.2
          break
        default:
          tdWidth = {
            tbody: 120,
            thead: 64
          }
      }
      return tdWidth
    },
    finalCellStyle: function ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return {
          background: '#fafafa',
          fontSize: '12px'
        }
      }
      return {
        background: '#fff',
        fontSize: '12px'
      }
    },
    open (row) {
      console.log(row)
    },
    myAlert (rowData) {
      Sentry.configureScope(scope => {
        scope.setTag('error_type', 'event')
      })
      Sentry.captureException('事件')
    }
  }
}
</script>

<style>
.el-table__body {
  width: 100%;
  table-layout: fixed !important;
}
.el-table {
  width: 99.9% !important;
}
.el-table td,
.el-table th {
  padding: 6px 0;
  display: table-cell !important;
}
.el-table td,
.el-table th.is-leaf,
.el-table--border,
.el-table--group {
  border-color: rgba(236, 236, 236, 0.5);
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: rgba(236, 236, 236, 0.5);
}
.el-table thead,
.el-table {
  color: #333;
}
/* iview */
.ivu-table {
  font-size: 12px;
  color: #333;
}
.ivu-table td[class^="ivu-table-column"] {
  height: auto;
  padding: 6px 0;
}
.ivu-table .ivu-table-cell {
  padding: 0 10px;
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
