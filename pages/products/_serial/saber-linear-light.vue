<template>
    <section class="wrap-product-detail-page">
        <h2 class="title-pg">SABER SERIES LINEAR LIGHT</h2>
        <el-row>
          <el-col :span="24">
            <img class="img-product" src="../../../static/products/com/saber-linear-light/1.jpg" alt=""/>
            <img class="img-product" src="../../../static/products/com/saber-linear-light/2.jpg" alt=""/>
            <img class="img-product" src="../../../static/products/com/saber-linear-light/3.jpg" alt=""/>
          </el-col>
          <!-- TODO: <el-col :span="12">
            <ul class="list-666">
                <li>Very Low energy consumption</li>
                <li>Extremely long life</li>
                <li>Instant 100% light, no warm up time </li>
                <li>Lower thermal output(compare with the standard reference product)</li>
                <li>Can work even at extremely low temperatures</li>
            </ul>
          </el-col> -->
        </el-row>
        <h2 class="title-sec">Specifications</h2>
        <el-table :data="tbSpec" stripe class="tb-sec" :span-method="spanMethod">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="SABER SERIES LINEAR LIGHT">
            <el-table-column label="35W" prop="val"></el-table-column>
            <el-table-column label="50W" prop="val2"></el-table-column>
            <el-table-column label="70W" prop="val3"></el-table-column>
          </el-table-column>
        </el-table>
        <h2 class="title-sec">Construction</h2>
        <el-table :data="tbSize" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="SABER SERIES LINEAR LIGHT" prop="val"></el-table-column>
        </el-table>
        <h2 class="title-sec">Package</h2>
        <el-table :data="tbPkg" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column label="SABER SERIES LINEAR LIGHT" prop="val"></el-table-column>
        </el-table>
    </section>
</template>
<script>
export default {
    data() {
        return {
            tbSpec: [
                {catalog: 'System power', val: '35W', val2: '50W', val3: '70W'},
                {catalog: 'Lumens', val: '5600 LM', val2: '8000 LM', val3: '11200 LM'},
                {catalog: 'Mains voltage', val: '100-277Vac/ 50-60Hz', val2: '', val3: ''},
                {catalog: 'Lamp colour temperature', val: '2700-6000K', val2: '', val3: ''},
                {catalog: 'Lamp life (L70)', val: '50,000HRS', val2: '', val3: ''},
                {catalog: 'Beam angle', val: '30/60/90/120 Degrees', val2: '', val3: ''},
                {catalog: 'CRI', val: '>80', val2: '', val3: ''},
                {catalog: 'IP Rating', val: 'IP65', val2: '', val3: ''},
                {catalog: 'Operating temperature', val: '- 30 ℃ to + 55 ℃', val2: '', val3: ''},
                {catalog: 'Operating humidity', val: '+ 10% to +95% RH, non-condensing', val2: '', val3: ''},
                {catalog: 'Storage temperature', val: '-20 ℃ to + 70 ℃', val2: '', val3: ''},
                {catalog: 'Storage humidity', val: '+ 10% to +95% RH, non-condensing', val2: '', val3: ''},
            ],
            tbSize: [
                {catalog: 'Length', val: '1500 mm'},
                {catalog: 'Width', val: '70.15 mm'},
                {catalog: 'Height', val: '38.75mm'},
            ],
            tbPkg: [
                {catalog: 'Carton Size', val: '1548*390*207mm (10PCS /CTN)'},
                {catalog: 'N.W.:', val: '3.5KG/PC'},
                {catalog: 'G.W.:', val: '47KG (10PCS /CTN)'},
            ]
        }
    },
    methods: {
        spanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex >= 2 && columnIndex >= 1) {
                return [1,3]
            } else {
                return [1,1]
            }
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


