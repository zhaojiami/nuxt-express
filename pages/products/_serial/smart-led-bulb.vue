<template>
    <section class="wrap-product-detail-page">
        <h2 class="title-pg">Smart LED Bulb 7W</h2>
        <el-row>
          <el-col :span="12">
            <img class="img-product" src="../../../static/products/smart/smart-led-bulb/7W.jpg" alt=""/>
          </el-col>
          <el-col :span="12">
            <ul class="list-666">
                <li>Multicolor RGB/CCT adjustable</li>
                <li>No Hub or Wi-Fi Required</li>
                <li>Control from Anywhere </li>
                <li>Scenes and Schedules</li>
                <li>Single or group control</li>
                <li>Smartphone by Bluetooth </li>
                <li>Remote control by 2.4G</li>
                <li>Free Apps by Ourselves on Android and IOS. Android 4.3/IOS9.0 or higher</li>
            </ul>
          </el-col>
        </el-row>
        <h2 class="title-sec">Specifications</h2>
        <el-table :data="tbSpec" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="STLB7" prop="val"></el-table-column>
        </el-table>
        <h2 class="title-sec">Construction</h2>
        <el-table :data="tbSize" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="STLB7" prop="val"></el-table-column>
        </el-table>
        <h2 class="title-sec">Package</h2>
        <el-table :data="tbPkg" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="STLB7" prop="val"></el-table-column>
        </el-table>
    </section>
</template>
<script>
export default {
    data() {
        return {
            tbSpec: [
                {catalog: 'System power', val: '7W'},
                {catalog: 'Lumens', val: '550Lm'},
                {catalog: 'Mains voltage', val: '100-240Vac/ 50-60Hz'},
                {catalog: 'Lamp colour temperature', val: '2800-6500K'},
                {catalog: 'Lamp life (L70)', val: '50,000HRS'},
                {catalog: 'Beam angle', val: '270Degrees'},
                {catalog: 'CRI', val: '>80'},
                {catalog: 'Socket', val: 'E26/E27/B22'},
                {catalog: 'Operating temperature', val: '- 15 ℃ to + 40 ℃'},
                {catalog: 'Operating humidity', val: '+ 10% to +95% RH, non-condensing'},
                {catalog: 'Storage temperature', val: '-15 ℃ to + 60 ℃'},
                {catalog: 'Storage humidity', val: '+ 10% to +95% RH, non-condensing'},
            ],
            tbSize: [
                {catalog: 'Diameter', val: '70 mm'},
                {catalog: 'Height', val: '125 mm'},
            ],
            tbPkg: [
                {catalog: 'Carton Size', val: '420*420*580mm  (100PCS /CTN)'},
                {catalog: 'N.W.:', val: '5KG'},
                {catalog: 'G.W.:', val: '8KG (100PCS /CTN)'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap-product-detail-page {
    .text-center {
        text-align: center;
    }
    .title-pg {
        color: rgb(8, 58, 129);
    }
    .img-product {
        display: inline-block;
        width: auto;
        height: 200px;
    }
    .list-666 {
        margin: 30px 0 0 0;
        color: #606266;
    }
    .title-sec {
        margin: 20px auto 10px auto;
        color: #5bba4a;
    }
    .tb-sec {
        width: 90%;
        margin: 0 auto;
    }
}
</style>


