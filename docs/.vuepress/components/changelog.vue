<template>
  <div class="wrapper">
    <el-timeline>
      <el-timeline-item v-for="(item, key) in logs" :key="key" :timestamp="item.version" placement="top">
        <el-card v-if="item.feat">
          <h4>{{item.feat.label}}</h4>
          <p v-for="(value, idx) in item.feat.updates" :key="idx">{{value}}</p>
        </el-card>
         <el-card v-if="item.fix" style="margin-top: 20px">
          <h4>{{item.fix.label}}</h4>
          <p v-for="(value, idx) in item.fix.updates" :key="idx">{{value}}</p>
        </el-card> 
        <el-card v-if="item.optimization" style="margin-top: 20px">
          <h4>{{item.optimization.label}}</h4>
          <p v-for="(value, idx) in item.optimization.updates" :key="idx">{{value}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  name: "Changelog",
  props: {
    logs: {
        type: Array,
        required: true,
        default() {
            return []
        }
    }
  }
};
</script>