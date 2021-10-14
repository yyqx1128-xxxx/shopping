<template>  
    <div class="echart-div">
        <div class="header">
            <navbar title="评论统计" :lefticonshow="true" :lefticon="lefticon" />
                
        </div>
        <div class="echart-content">
            <div class="echart-content-div" ref="myChart" >hhhhh</div>   
        </div>
    </div>
</template>

<script>

import * as echarts from "echarts";
import navbar from '@/components/common/navbar/nav-bar'
export default {
    data() {
        return {
            lefticon: require('@/assets/img/return-black-icon.png'),
            myChart:null,
        }
    },
    components: {
        navbar
    },
    mounted() {
        this.drawLine()
    },
  
    methods: {
        drawLine() {
            //echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的折线图
            //注意：这里只是在mounted中生成，实际项目中会在通过接口获取数据后生成图表
            this.myChart = echarts.init(this.$refs.myChart);
             var datas = [
                [
                    { name: '好评', value: 70 },
                    { name: '中评', value: 20 },
                    { name: '差评', value: 10 },
                ],
            ];
            //圆形图
            let option = {
                color: ['red', '#FFE4C4', '#DCDCDC'],
                series : datas.map(function(data) {
                    return {
                        type: 'pie',
                        radius: [20, 50],
                        height: '100%',
                        left: 'center',
                        width: '375',
                        data:data,

                    }
                })

            }
            // 折线图
            var option1 = {
                tooltip: {
                    //设置tip提示
                    trigger: "axis",
                },

                legend: {
                    //设置区分（哪条线属于什么）
                    data: ["历史值"],
                    textStyle: {
                        //图例文字的样式
                        color: "#FFFFFF",
                        fontSize: 12,
                    },
                },
                color: ["#f04e4e"], //设置区分（每条线是什么颜色，和 legend 一一对应）
                xAxis: {
                    axisPointer: {
                        lineStyle: {
                            color: "#eeeeee",
                            width: 2,
                        },
                        label: {
                            backgroundColor: "#eeeeee",
                        },
                    },
                    //设置x轴
                    type: "category",
                    boundaryGap: false, //坐标轴两边不留白
                    data: ['2021-02-04','2021-02-05','2021-02-06','2021-02-07','2021-02-08','2021-02-09','2021-02-10'] ,
                    name: "时间", //X轴 name
                    nameTextStyle: {
                        //坐标轴名称的文字样式
                        color: "#eeeeee",
                        fontSize: 12,
                        padding: [0, 0, 0, 20],
                    },
                    // X轴坐标文字颜色
                    axisLabel: {
                        show: true,
                        textStyle: {
                        color: "#FFFFFF", //这里用参数代替了
                        },
                    },
                    axisLine: {
                        //坐标轴轴线相关设置。
                        lineStyle: {
                        color: "#4a4a4a",
                        },
                    },
                },
                yAxis: {
                    name: name,
                    nameTextStyle: {
                        color: "#FFFFFF",
                        fontSize: 12,
                        padding: [0, 0, 10, 0],
                    },
                    axisLine: {
                        lineStyle: {
                        color: "#4a4a4a",
                        },
                    },
                    axisTick: {
                        //y轴刻度线
                        show: false,
                    },
                    splitLine: {
                        //网格线
                        // "show": false,

                        lineStyle: { color: "#4a4a4a" },
                    },
                    type: "value",
                    // 改变y轴文字颜色
                    axisLabel: {
                        textStyle: {
                        color: "#ffffff",
                        },
                    },
                },
                series: [
                    {
                        name: "历史值",
                        data: [3,4,5,6,7,8,9],
                        type: "line", // 类型为折线图
                        // 将折线图改成平滑的曲线
                        // smooth: true,
                        lineStyle: {
                        // 线条样式 => 必须使用normal属性
                        normal: {
                            color: "#f04e4e",
                        },
                        },

                        // // 添加横线的渐变的背景图
                        // areaStyle: {
                        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        //     {
                        //       offset: 0,
                        //       color: "rgba(3,196,187,0.5)",
                        //     },
                        //     {
                        //       offset: 1,
                        //       color: "rgba(3,196,187,0.1)",
                        //     },
                        //   ]),
                        // },
                    },
                ],
            };

            //竖形图
            let option2 = {
                color: ['#f44'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'每月花费',
                        type:'bar',
                        barWidth: '60%',
                        data:[995,666,444,858,654,236,645,546,846,225,547,356]
                    }
                ]
            }
               

            this.myChart.setOption(option2)
        }
    }

}
</script>

<style lang="less" scoped>
    .echart-div {
        .header {
            padding-top: 44px;
            overflow: hidden;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 10;
            background: #fff;
            vertical-align: middle;
	    }
        .echart-content {
            padding-top: 88px;
            .echart-content-div {
                margin: 10px 16px;
                height: 200px;
                background: #f5f5f5;
            }
        }
    }
</style>
