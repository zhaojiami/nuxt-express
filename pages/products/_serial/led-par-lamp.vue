<template>
    <section class="wrap-product-detail-page">
        <h2 class="title-pg">Par20 LED Lamp 7W</h2>
        <el-row>
          <el-col :span="12">
            <img class="img-product" src="../../../assets/img/products/com/led-par-lamp/7-10W.jpg" alt=""/>
          </el-col>
          <el-col :span="12">
            <ul class="list-666">
                <li>Very Low energy consumption</li>
                <li>Extremely long life</li>
                <li>Instant 100% light, no warm up time </li>
                <li>Lower thermal output(compare with the standard reference product)</li>
                <li>Can work even at extremely low temperatures</li>
            </ul>
          </el-col>
        </el-row>
        <h2 class="title-sec">Specifications</h2>
        <el-table :data="tbSpec" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="SNPAR20" prop="val"></el-table-column>
        </el-table>
        <h2 class="title-sec">Construction</h2>
        <el-table :data="tbSize" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="SNPAR207W" prop="val"></el-table-column>
        </el-table>
        <h2 class="title-sec">Package</h2>
        <el-table :data="tbPkg" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="SNPAR207W" prop="val"></el-table-column>
        </el-table>
    </section>
</template>
<script>
export default {
    data() {
        return {
            tbSpec: [
                {catalog: 'System power', val: '7W'},
                {catalog: 'Lumens', val: '600Lm'},
                {catalog: 'Mains voltage', val: '100-240Vac/ 50-60Hz'},
                {catalog: 'Lamp colour temperature', val: '2800-6500K'},
                {catalog: 'Lamp life (L70)', val: '50,000HRS'},
                {catalog: 'Beam angle', val: '24Degrees/36Degree'},
                {catalog: 'CRI', val: '>80'},
                {catalog: 'Socket', val: 'E26/E27/B22'},
                {catalog: 'Operating temperature', val: '- 15 ℃ to + 40 ℃'},
                {catalog: 'Operating humidity', val: '+ 10% to +95% RH, non-condensing'},
                {catalog: 'Storage temperature', val: '-15 ℃ to + 60 ℃'},
                {catalog: 'Storage humidity', val: '+ 10% to +95% RH, non-condensing'},
            ],
            tbSize: [
                {catalog: 'Diameter', val: '65 mm'},
                {catalog: 'Height', val: '100 mm'},
            ],
            tbPkg: [
                {catalog: 'Carton Size', val: '420*420*270mm  (50PCS /CTN)'},
                {catalog: 'N.W.:', val: '5KG'},
                {catalog: 'G.W.:', val: '8KG (50PCS /CTN)'},
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
        color: #8F1577;
    }
    .tb-sec {
        width: 90%;
        margin: 0 auto;
    }
}
</style>


