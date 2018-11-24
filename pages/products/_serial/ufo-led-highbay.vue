<template>
    <section class="wrap-product-detail-page">
        <h2 class="title-pg">{{catalogNo}}</h2>
        <el-row>
          <el-col :span="12">
            <img class="img-product" src="../../../assets/img/products/indus/ufo-led-highbay/100W-1.jpg" alt=""/>
            <img class="img-product" src="../../../assets/img/products/indus/ufo-led-highbay/100W-2.jpg" alt=""/>
            <img class="img-product" src="../../../assets/img/products/indus/ufo-led-highbay/100W-3.jpg" alt=""/>
          </el-col>
          <el-col :span="12">
            <ul class="list-666">
                <li>Now with 6 year warranty</li>
                <li>40% energy saving</li>
                <li>Up to 140 lumens per circuit watt</li>
                <li>120° beam angle without reflector</li>
                <li>60° / 70° / 90° reflector option</li>
                <li>Surface mount bracket available</li>
                <li>50,000 hours life to L70</li>
                <li>IP65 - Suitable for areas with high salt/moisture content</li>
                <li>Supplied with mounting ring and IP67 connector as standard</li>
            </ul>
          </el-col>
        </el-row>
        <h2 class="title-sec">Specifications</h2>
        <el-table :data="tbSpec" stripe class="tb-sec" :span-method="spanMethod">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column :label="catalogNo">
            <el-table-column label="100W" prop="val"></el-table-column>
            <el-table-column label="150W" prop="val2"></el-table-column>
            <el-table-column label="200W" prop="val3"></el-table-column>
            <el-table-column label="240W" prop="val4"></el-table-column>
          </el-table-column>
        </el-table>
        <h2 class="title-sec">Size</h2>
        <el-table :data="tbSize" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column :label="catalogNo">
            <el-table-column label="100W/150W" prop="val"></el-table-column>
            <el-table-column label="200W/240W" prop="val2"></el-table-column>
          </el-table-column>
        </el-table>
        <h2 class="title-sec">Package</h2>
        <el-table :data="tbPkg" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column :label="catalogNo">
            <el-table-column label="100W/150W" prop="val"></el-table-column>
            <el-table-column label="200W/240W" prop="val2"></el-table-column>
          </el-table-column>
        </el-table>
    </section>
</template>
<script>
export default {
    data() {
        return {
            catalogNo: 'AURA SERIES HIGHBAY',
            tbSpec: [
                {
                    catalog: 'System power', 
                    val: '100W',
                    val2: '150W',
                    val3: '200W',
                    val4: '240W'
                },
                {
                    catalog: 'Lumens',
                    val: '14000 LM',
                    val2: '21000 LM',
                    val3: '28000 LM',
                    val4: '33600 LM'
                },
                {catalog: 'Mains voltage', val: '100-277Vac/ 50-60Hz'},
                {catalog: 'Lamp colour temperature', val: '2700-6000K'},
                {catalog: 'Lamp life (L70)', val: '50,000HRS'},
                {catalog: 'Beam angle', val: '120 Degrees'},
                {catalog: 'CRI', val: '>80'},
                {catalog: 'IP Rating', val: 'IP65'},
                {catalog: 'Operating temperature', val: '- 30 ℃ to + 55 ℃'},
                {catalog: 'Operating humidity', val: '+ 10% to +95% RH, non-condensing'},
                {catalog: 'Storage temperature', val: '-20 ℃ to + 70 ℃'},
                {catalog: 'Storage humidity', val: '+ 10% to +95% RH, non-condensing'},
            ],
            tbSize: [
                {
                    catalog: 'Diameter', 
                    val: '360 mm',
                    val2: '460 mm'
                },
                {
                    catalog: 'Height', 
                    val: '170 mm',
                    val2: '185 mm'
                },
            ],
            tbPkg: [
                {
                    catalog: 'Carton Size', 
                    val: '480*380*435mm (2PCS /CTN)',
                    val2: '510*430*510mm (2PCS /CTN)'
                },
                {
                    catalog: 'N.W.:', 
                    val: '3.4KG/PC',
                    val2: '5.6KG/PC'
                },
                {
                    catalog: 'G.W.:', 
                    val: '9.6KG (2PCS /CTN)',
                    val2: '12.8KG (2PCS /CTN)'
                }
            ]
        }
    },
    methods: {
        spanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex >= 2 && columnIndex >= 1) {
                return [1,4]
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


