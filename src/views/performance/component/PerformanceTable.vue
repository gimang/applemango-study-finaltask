<template>
  <div>
    <el-table :data="dataList" header-row-class-name="table-header" stripe border>
      <el-table-column prop="eventlevelId" label="상태" width="54" align="center">
        <template slot-scope="data">
          <div>
            <i
              class="el-icon-success table-icon"
              style="color:#46a2e2;"
              v-if="data.row.eventlevelId !== 'DN'"
            />
            <i class="el-icon-warning table-icon" style="color:#f14d43;" v-else />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="objName" label="장비명" :formatter="nullValueFormatter" />
      <el-table-column prop="ipaddressIpv4" label="IP 주소" :formatter="nullValueFormatter" />
      <el-table-column prop="objCompanyName" label="제조사" :formatter="nullValueFormatter" />
      <el-table-column prop="objProductId" label="모델" :formatter="nullValueFormatter" />
      <el-table-column
        v-for="(col, index) in rscColumns"
        :key="index"
        :prop="col.prop"
        :label="col.label"
        :align="col.align"
        :formatter="col.formatter"
      />
      <el-table-column v-for="col in trafficColumns" :label="col.label" :key="col.label">
        <el-table-column prop="bpsIn" label="IN (bps)" :formatter="numberForamtter" align="right" />
        <el-table-column prop="bpsIn" label="OUT (bps)" :formatter="numberForamtter" align="right" />
      </el-table-column>
      <el-table-column v-for="col in syslogColumns" :label="col.label" :key="col.label">
        <el-table-column
          :formatter="nullValueFormatter"
          prop="syslogUncheckedCnt"
          label="정책"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="emergency"
          label="Emergency"
          align="right"
        />
        <el-table-column :formatter="nullValueFormatter" prop="alert" label="Alert" align="right" />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="critical"
          label="Critical"
          align="right"
        />
        <el-table-column :formatter="nullValueFormatter" prop="error" label="Error" align="right" />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="warning"
          label="Warning"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="notice"
          label="Notice"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="information"
          label="Information"
          align="right"
        />
        <el-table-column :formatter="nullValueFormatter" prop="debug" label="Debug" align="right" />
      </el-table-column>
      <el-table-column v-for="col in snmptrapColumns" :label="col.label" :key="col.label">
        <el-table-column
          :formatter="nullValueFormatter"
          prop="trapUncheckedCnt"
          label="정책"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="coldStart"
          label="coldStart"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="warmStart"
          label="warmStart"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="linkDown"
          label="linkDown"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="linkUp"
          label="linkUp"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="egpNeighborLoss"
          label="egpNeighborLoss"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="authenticationFailure"
          label="authenticationFailure"
          align="right"
        />
        <el-table-column
          :formatter="nullValueFormatter"
          prop="enterpriseSpecific"
          label="enterpriseSpecific"
          align="right"
        />
      </el-table-column>
      <el-table-column prop="objFavorite" label="관심대상" width="70" align="center">
        <template slot-scope="data">
          <div>
            <i
              class="el-icon-star-on table-icon"
              style="color:#ffab00;"
              v-if="data.row.objFavorite === '1'"
            />
            <i class="el-icon-star-off table-icon" v-else />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 8px;">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import _ from 'lodash';
import { nullValueFormatter, numberForamtter } from '@/utils/elTableUtil';

export default {
  name: 'PerformanceGrid',
  props: ['dataList', 'selectedKey', 'responsetimeRscId'],
  computed: {
    rscColumns() {
      const columns = [];

      if (
        this.selectedKey === 'NETDEVICE_TOTAL' ||
        this.selectedKey === 'RESPONSETIME'
      ) {
        if (
          this.responsetimeRscId === 'RESPONSETIME_ICMP' ||
          this.selectedKey === 'NETDEVICE_TOTAL'
        ) {
          columns.push({
            prop:
              this.selectedKey === 'NETDEVICE_TOTAL'
                ? 'responsetimeIcmp'
                : 'rscValue',
            label: 'ICMP(ms)',
            align: 'right',
            formatter: this.nullValueFormatter,
          });
        }
        if (
          this.responsetimeRscId === 'RESPONSETIME_SNMP' ||
          this.selectedKey === 'NETDEVICE_TOTAL'
        ) {
          columns.push({
            prop:
              this.selectedKey === 'NETDEVICE_TOTAL'
                ? 'responsetimeSnmp'
                : 'rscValue',
            label: 'SNMP(ms)',
            align: 'right',
            formatter: this.nullValueFormatter,
          });
        }
      }

      if (
        this.selectedKey === 'NETDEVICE_TOTAL' ||
        this.selectedKey === 'CPU_USERATE'
      ) {
        columns.push({
          prop:
            this.selectedKey === 'NETDEVICE_TOTAL' ? 'cpuUserate' : 'rscValue',
          label: 'CPU(%)',
          align: 'right',
          formatter: this.nullValueFormatter,
        });
      }

      if (
        this.selectedKey === 'NETDEVICE_TOTAL' ||
        this.selectedKey === 'MEM_USERATE'
      ) {
        columns.push({
          prop:
            this.selectedKey === 'NETDEVICE_TOTAL' ? 'memUserate' : 'rscValue',
          label: '메모리(%)',
          align: 'right',
          formatter: this.nullValueFormatter,
        });
      }

      if (
        this.selectedKey === 'NETDEVICE_TOTAL' ||
        this.selectedKey === 'DEVICE_TEMP'
      ) {
        columns.push({
          prop:
            this.selectedKey === 'NETDEVICE_TOTAL' ? 'deviceTemp' : 'rscValue',
          label: '온도(℃)',
          align: 'right',
          formatter: this.nullValueFormatter,
        });
      }

      if (this.selectedKey === 'UNCHECKED_SYSLOG') {
        columns.push({
          prop:
            this.selectedKey === 'NETDEVICE_TOTAL' ? 'deviceTemp' : 'rscValue',
          label: '온도(℃)',
          align: 'right',
          formatter: this.nullValueFormatter,
        });
      }

      return columns;
    },
    trafficColumns() {
      return this.selectedKey === 'NETDEVICE_TOTAL' ? [{ label: 'BPS' }] : [];
    },
    syslogColumns() {
      return this.selectedKey === 'UNCHECKED_SYSLOG'
        ? [{ label: 'Syslog' }]
        : [];
    },
    snmptrapColumns() {
      return this.selectedKey === 'UNCHECKED_SNMPTRAP'
        ? [{ label: 'SNMP Trap' }]
        : [];
    },
  },
  methods: {
    showColumn(key) {
      return this.selectedKey === key;
    },
    nullValueFormatter,
    numberForamtter,
  },
};
</script>

<style scoped>
.table-icon {
  font-size: 16px;
}
</style>
