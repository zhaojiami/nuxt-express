<template>
    <section class="wrap-product-detail-page">
        <h2 class="title-pg">{{catalogNo}}</h2>
        <el-row>
          <el-col :span="24">
            <img class="img-product" src="../../../assets/img/products/indus/nova-flood-light/1.jpg" alt=""/>
            <img class="img-product" src="../../../assets/img/products/indus/nova-flood-light/2.jpg" alt=""/>
          </el-col>
          <!-- TODO: <el-col :span="12">
            <ul class="list-666">
                <li>Now with 6 year warranty</li>
                <li>40% energy saving</li>
                <li>Up to 150 lumens per circuit watt</li>
                <li>120° beam angle without reflector</li>
                <li>Surface mount bracket available</li>
                <li>50,000 hours life to L70</li>
                <li>IP65 - Suitable for areas with high salt/moisture content</li>
                <li>Supplied with mounting ring and IP67 connector as standard</li>
            </ul>
          </el-col> -->
        </el-row>
        <h2 class="title-sec">Specifications</h2>
        <el-table :data="tbSpec" stripe class="tb-sec" :span-method="spanMethod">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column :label="catalogNo">
            <el-table-column label="10W" prop="val"></el-table-column>
            <el-table-column label="20W" prop="val2"></el-table-column>
            <el-table-column label="30W" prop="val3"></el-table-column>
            <el-table-column label="50W" prop="val4"></el-table-column>
            <el-table-column label="80W" prop="val5"></el-table-column>
            <el-table-column label="100W" prop="val6"></el-table-column>
            <el-table-column label="150W" prop="val7"></el-table-column>
            <el-table-column label="200W" prop="val8"></el-table-column>
          </el-table-column>
        </el-table>
        <h2 class="title-sec">Size</h2>
        <el-table :data="tbSize" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column :label="catalogNo">
            <el-table-column label="10W" prop="val"></el-table-column>
            <el-table-column label="20W" prop="val2"></el-table-column>
            <el-table-column label="30W" prop="val3"></el-table-column>
            <el-table-column label="50W" prop="val4"></el-table-column>
            <el-table-column label="80W" prop="val5"></el-table-column>
            <el-table-column label="100W" prop="val6"></el-table-column>
            <el-table-column label="150W" prop="val7"></el-table-column>
            <el-table-column label="200W" prop="val8"></el-table-column>
          </el-table-column>
        </el-table>
        <h2 class="title-sec">Package</h2>
        <el-table :data="tbPkg" stripe class="tb-sec">
          <el-table-column label="Catalogue No" prop="catalog" width="200px"></el-table-column>
          <el-table-column :label="catalogNo">
            <el-table-column label="10W" prop="val"></el-table-column>
            <el-table-column label="20W" prop="val2"></el-table-column>
            <el-table-column label="30W" prop="val3"></el-table-column>
            <el-table-column label="50W" prop="val4"></el-table-column>
            <el-table-column label="80W" prop="val5"></el-table-column>
            <el-table-column label="100W" prop="val6"></el-table-column>
            <el-table-column label="150W" prop="val7"></el-table-column>
            <el-table-column label="200W" prop="val8"></el-table-column>
          </el-table-column>
        </el-table>
    </section>
</template>
<script>
export default {
    data() {
        return {
            catalogNo: 'NOVA SERIES FLOODLIGHT',
            tbSpec: [
                {
                    catalog: 'System power', 
                    val: '10W',
                    val2: '20W',
                    val3: '30W',
                    val4: '50W',
                    val5: '80W',
                    val6: '100W',
                    val7: '150W',
                    val8: '200W'
                },
                {
                    catalog: 'Lumens', 
                    val: '1100 LM',
                    val2: '2200 LM',
                    val3: '3300 LM',
                    val4: '5500 LM',
                    val5: '8800 LM',
                    val6: '11000 LM',
                    val7: '16500 LM',
                    val8: '22000 LM'
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
                    catalog: 'Length', 
                    val: '166 mm',
                    val2: '216.5 mm',
                    val3: '226.5 mm',
                    val4: '310.5 mm',
                    val5: '354.3 mm',
                    val6: '402.3 mm',
                    val7: '430.3 mm',
                    val8: '470.3 mm',
                },
                {
                    catalog: 'Width', 
                    val: '116 mm',
                    val2: '152 mm',
                    val3: '167 mm',
                    val4: '220 mm',
                    val5: '245 mm',
                    val6: '295 mm',
                    val7: '330 mm',
                    val8: '360 mm',
                },
                {
                    catalog: 'Height', 
                    val: '32 mm',
                    val2: '40 mm',
                    val3: '40 mm',
                    val4: '50 mm',
                    val5: '55 mm',
                    val6: '60 mm',
                    val7: '60 mm',
                    val8: '60 mm',
                },
            ],
            tbPkg: [
                {
                    catalog: 'Carton Size', 
                    val: '480*380*435mm (36PCS /CTN)',
                    val2: '5150*380*260mm (20PCS /CTN)',
                    val3: '535*405*260mm (20PCS /CTN)',
                    val4: '530*365*255mm  (8PCS /CTN)',
                    val5: '435*340*130mm  (1PCS /CTN)',
                    val6: '510*430*135mm  (1PCS /CTN)',
                    val7: '510*430*135mm  (1PCS /CTN)',
                    val8: '555*460*135mm  (1PCS /CTN)'
                },
                {
                    catalog: 'N.W.:', 
                    val: '0.38KG',
                    val2: '0.75KG',
                    val3: '0.9KG',
                    val4: '2KG',
                    val5: '3.6KG',
                    val6: '4.1KG',
                    val7: '5.2KG',
                    val8: '6.2KG'
                },
                {
                    catalog: 'G.W.:', 
                    val: '15KG 36PCS/CTN',
                    val2: '16KG 20PCS/CTN',
                    val3: '20KG 20PCS/CTN',
                    val4: '18KG 8PCS/CTN',
                    val5: '4.3KG 1PCS/CTN',
                    val6: '5KG 1PCS/CTN',
                    val7: '6.2KG 1PCS/CTN',
                    val8: '7.5KG 1PCS/CTN'
                }
            ]
        }
    },
    methods: {
        spanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex >= 2 && columnIndex >= 1) {
                return [1,8]
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


