export default ({$axios, redirect}) =>  {

    // 基本配置
    $axios.defaults.timeout = 30000
    $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    $axios.onRequest(config => {
        console.log('[Axios] request to ', config);
    })
    $axios.onResponse(res => {
        console.log('[Axios] receive res ', res);
    })
    $axios.onError(err => {
        console.log('[Axios] request err ', err);
        // const code = parseInt(err.response && err.response.status)
        // if(code === 400) {
        //     redirect('/400')
        // }
    })
};
