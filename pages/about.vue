<template>
    <div class="wrap-about">
        <div class="container-about">
            <!-- <h1 class="Content__Title">{{ $t('about.title') }}</h1>
            <p>{{ $t('about.introduction') }}</p> -->
            <img class="img-company" src="../assets/img/about/company.png" alt="siden">
            <p class="mb-1">&nbsp;&nbsp;At Siden Electronics, we’re always looking for ways to offer world-class service and cutting edge LED lighting products with economical solutions.</p>
            <p class="mb-1">&nbsp;&nbsp;We continue to innovate, challenge our thinking and improve our processes. Our years of experience in innovation and manufacturing technology give us the lead in engineering, costs and product performance. Our formula for success is based upon our goal to customers to save money.</p>
            <p class="mb-1">&nbsp;&nbsp;Day in and day out, we work hand-in-hand with our clients to meet their needs on schedule and within budget.</p>
            <p class="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;See Light economically!</p>
        </div>
    </div>
</template>

<script>
export default {
  //   auth: false,
  head() {
    return { title: this.$t("about.title") };
  }
};
</script>
<style lang="scss" scoped>
.wrap-about {
    .img-company {
        float: right;
        margin-left: 10px;
        width: 50%;
        height: auto;
    }
    .mb-1 {
        margin-bottom: 10px;
    }
    .container-about {
        padding: 30px 0;
        font-size: 16px;
        color: #333333;
    }
}
</style>
