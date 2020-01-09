import React, { Component } from 'react'
// 引入样式文件
import styles from '../../style/Weather.module.less'
// 引入请求接口文件
import { getWeatherDate } from '../../api/weather'

class Weather extends Component{
    constructor () {
        super()
        this.state = {
            weatherData : {
                "condition": {
                    "Fwindchill" : "",
                    "Fsource" : "",
                    "Fprecip" : "0",
                    "Fcondition_id" : "5",
                    "Fcondition" : "晴",
                    "Fwind_dir" : "南风",
                    "Fdewpoint" : "-10",
                    "Fcomfortcount" : "36",
                    "Fupdate_time" : "2020-01-09 15:20:00",
                    "Fid" : "283490",
                    "Fwind_dir_id" : "9",
                    "Ficon" : "0",
                    "Fmslp" : "1024",
                    "Fheatindex" : "",
                    "Fwind_level" : "2",
                    "Freal_feel" : "4",
                    "Finternal" : "33",
                    "Ftemp" : "4",
                    "Fwspd" : "2.3",
                    "Fsun_down" : "2020-01-09 17:06:00",
                    "Fget_hour" : "0",
                    "Fhumidity" : "30",
                    "wind_degrees" : "180",
                    "Fuvi" : "1",
                    "Ftip" : "",
                    "vis" : "19668",
                    "Fget_time" : "1578556503",
                    "Fcity" : "2",
                    "Fsun_rise" : "2020-01-09 07:36:00",
                    "wind_desc" : {
                        "value" : "2",
                        "unit" : "级",
                        "winddir" : "南风"
                    },
                    "humidity" : "30%"
                },
                "forecastDayList": [
                    {
                        "Fsource": "",
                        "Fcondition_id_night": "1",
                        "Fcondition_id_day": "1",
                        "Fwind_level_day": "3",
                        "qpf": "0.0",
                        "pop": "20",
                        "Fwind_level_night": "3",
                        "Fupdate_time": "2020-01-08 23:06:00",
                        "Ftemp_high": "5",
                        "Fid": "3097295479",
                        "Ficon_night": "30",
                        "Fcity": "2",
                        "Fmoonset_time": "2020-01-08 04:48:00",
                        "Fwind_dir_night": "西南风",
                        "Fcondition_night": "晴",
                        "Fpredict_date": "2020-01-08",
                        "Ficon_day": "0",
                        "Finternal": "33",
                        "wind_degrees_night": "225",
                        "Fwspd_night": "4.4",
                        "Fsun_down": "2020-01-08 17:05:00",
                        "Fwind_dir_id_night": "10",
                        "Fwind_dir_day": "北风",
                        "Fcondition_day": "晴",
                        "Fuvi": "2",
                        "Fhumidity": "33",
                        "Fmoonrise_time": "2020-01-08 14:52:00",
                        "Fmoon_phase": "WaxingGibbous",
                        "Fwspd_day": "4.4",
                        "Fget_time": "1578495663",
                        "Ftemp_low": "-6",
                        "wind_degrees_day": "0",
                        "Fsun_rise": "2020-01-08 07:36:00",
                        "Fwind_dir_id_day": "1",
                        "mslp": "1023"
                    },
                    {
                        "Fsource": "",
                        "Fcondition_id_night": "1",
                        "Fcondition_id_day": "1",
                        "Fwind_level_day": "3",
                        "qpf": "0.0",
                        "pop": "20",
                        "Fwind_level_night": "3",
                        "Fupdate_time": "2020-01-09 15:06:00",
                        "Ftemp_high": "5",
                        "Fid": "3105414899",
                        "Ficon_night": "30",
                        "Fcity": "2",
                        "Fmoonset_time": "2020-01-09 05:52:00",
                        "Fwind_dir_night": "北风",
                        "Fcondition_night": "晴",
                        "Fpredict_date": "2020-01-09",
                        "Ficon_day": "0",
                        "Finternal": "33",
                        "wind_degrees_night": "0",
                        "Fwspd_night": "4.4",
                        "Fsun_down": "2020-01-09 17:06:00",
                        "Fwind_dir_id_night": "1",
                        "Fwind_dir_day": "西南风",
                        "Fcondition_day": "晴",
                        "Fuvi": "2",
                        "Fhumidity": "40",
                        "Fmoonrise_time": "2020-01-09 15:39:00",
                        "Fmoon_phase": "WaxingGibbous",
                        "Fwspd_day": "4.4",
                        "Fget_time": "1578553503",
                        "Ftemp_low": "-7",
                        "wind_degrees_day": "225",
                        "Fsun_rise": "2020-01-09 07:36:00",
                        "Fwind_dir_id_day": "10",
                        "mslp": "1021"
                    },
                    {
                        "Fsource": "",
                        "Fcondition_id_night": "8",
                        "Fcondition_id_day": "1",
                        "Fwind_level_day": "3",
                        "qpf": "0.0",
                        "pop": "20",
                        "Fwind_level_night": "3-4",
                        "Fupdate_time": "2020-01-09 15:06:00",
                        "Ftemp_high": "7",
                        "Fid": "3105414900",
                        "Ficon_night": "31",
                        "Fcity": "2",
                        "Fmoonset_time": "2020-01-10 06:55:00",
                        "Fwind_dir_night": "北风",
                        "Fcondition_night": "多云",
                        "Fpredict_date": "2020-01-10",
                        "Ficon_day": "0",
                        "Finternal": "33",
                        "wind_degrees_night": "0",
                        "Fwspd_night": "5.6",
                        "Fsun_down": "2020-01-10 17:07:00",
                        "Fwind_dir_id_night": "1",
                        "Fwind_dir_day": "北风",
                        "Fcondition_day": "晴",
                        "Fuvi": "2",
                        "Fhumidity": "37",
                        "Fmoonrise_time": "2020-01-10 16:35:00",
                        "Fmoon_phase": "WaxingGibbous",
                        "Fwspd_day": "4.4",
                        "Fget_time": "1578553503",
                        "Ftemp_low": "-4",
                        "wind_degrees_day": "0",
                        "Fsun_rise": "2020-01-10 07:36:00",
                        "Fwind_dir_id_day": "1",
                        "mslp": "1020"
                    },
                    {
                        "Fsource": "",
                        "Fcondition_id_night": "8",
                        "Fcondition_id_day": "13",
                        "Fwind_level_day": "3",
                        "qpf": "0.0",
                        "pop": "30",
                        "Fwind_level_night": "3",
                        "Fupdate_time": "2020-01-09 15:06:00",
                        "Ftemp_high": "2",
                        "Fid": "3105414901",
                        "Ficon_night": "31",
                        "Fcity": "2",
                        "Fmoonset_time": "2020-01-11 07:53:00",
                        "Fwind_dir_night": "南风",
                        "Fcondition_night": "多云",
                        "Fpredict_date": "2020-01-11",
                        "Ficon_day": "2",
                        "Finternal": "33",
                        "wind_degrees_night": "180",
                        "Fwspd_night": "4.4",
                        "Fsun_down": "2020-01-11 17:08:00",
                        "Fwind_dir_id_night": "9",
                        "Fwind_dir_day": "东北风",
                        "Fcondition_day": "阴",
                        "Fuvi": "1",
                        "Fhumidity": "30",
                        "Fmoonrise_time": "2020-01-11 17:39:00",
                        "Fmoon_phase": "Full",
                        "Fwspd_day": "4.4",
                        "Fget_time": "1578553503",
                        "Ftemp_low": "-6",
                        "wind_degrees_day": "45",
                        "Fsun_rise": "2020-01-11 07:36:00",
                        "Fwind_dir_id_day": "2",
                        "mslp": "1020"
                    },
                    {
                        "Fsource": "",
                        "Fcondition_id_night": "8",
                        "Fcondition_id_day": "8",
                        "Fwind_level_day": "3",
                        "qpf": "0.0",
                        "pop": "20",
                        "Fwind_level_night": "3",
                        "Fupdate_time": "2020-01-09 15:06:00",
                        "Ftemp_high": "3",
                        "Fid": "3105414902",
                        "Ficon_night": "31",
                        "Fcity": "2",
                        "Fmoonset_time": "2020-01-12 08:44:00",
                        "Fwind_dir_night": "北风",
                        "Fcondition_night": "多云",
                        "Fpredict_date": "2020-01-12",
                        "Ficon_day": "1",
                        "Finternal": "33",
                        "wind_degrees_night": "0",
                        "Fwspd_night": "4.4",
                        "Fsun_down": "2020-01-12 17:09:00",
                        "Fwind_dir_id_night": "1",
                        "Fwind_dir_day": "北风",
                        "Fcondition_day": "多云",
                        "Fuvi": "2",
                        "Fhumidity": "42",
                        "Fmoonrise_time": "2020-01-12 18:49:00",
                        "Fmoon_phase": "WaningGibbous",
                        "Fwspd_day": "4.4",
                        "Fget_time": "1578553503",
                        "Ftemp_low": "-6",
                        "wind_degrees_day": "0",
                        "Fsun_rise": "2020-01-12 07:35:00",
                        "Fwind_dir_id_day": "1",
                        "mslp": "1020"
                    }
                ],
                "forecastaqi": {
                    "2020-01-08": {
                    "aqi": 27,
                    "level": 1,
                    "desc": "优",
                    "week": "昨天",
                    "day": "01/08",
                    "forecastTime": "2020-01-08",
                    "forecastTime_stamp": 1578412800000
                    },
                    "2020-01-09": {
                    "aqi": 40,
                    "level": 1,
                    "desc": "优",
                    "week": "今天",
                    "day": "01/09",
                    "forecastTime": "2020-01-09",
                    "forecastTime_stamp": 1578499200000
                    },
                    "2020-01-10": {
                    "aqi": 80,
                    "level": 2,
                    "desc": "良",
                    "week": "明天",
                    "day": "01/10",
                    "forecastTime": "2020-01-10",
                    "forecastTime_stamp": 1578585600000
                    },
                    "2020-01-11": {
                    "aqi": 90,
                    "level": 2,
                    "desc": "良",
                    "week": "周六",
                    "day": "01/11",
                    "forecastTime": "2020-01-11",
                    "forecastTime_stamp": 1578672000000
                    },
                    "2020-01-12": {
                    "aqi": 70,
                    "level": 2,
                    "desc": "良",
                    "week": "周日",
                    "day": "01/12",
                    "forecastTime": "2020-01-12",
                    "forecastTime_stamp": 1578758400000
                    },
                    "2020-01-13": {
                    "aqi": 90,
                    "level": 2,
                    "desc": "良",
                    "week": "周一",
                    "day": "01/13",
                    "forecastTime": "2020-01-13",
                    "forecastTime_stamp": 1578844800000
                    },
                    "2020-01-14": {
                    "aqi": 40,
                    "level": 1,
                    "desc": "优",
                    "week": "周二",
                    "day": "01/14",
                    "forecastTime": "2020-01-14",
                    "forecastTime_stamp": 1578931200000
                    }
                },
                "city": {
                    "pname": "北京市",
                    "name": "北京市",
                    "counname": "中国",
                    "label": "[]"
                },
                "time": {
                    "monthN": "腊月十五",
                    "monthG": "01月09",
                    "time": 1578557219
                },
                "alerts": false
            },
            fiveDayData : [
                {
                    "aqi": 27,
                    "level": 1,
                    "desc": "优",
                    "week": "昨天",
                    "day": "01/08",
                    "forecastTime": "2020-01-08",
                    "forecastTime_stamp": 1578412800000
                },
                {
                    "aqi": 40,
                    "level": 1,
                    "desc": "优",
                    "week": "今天",
                    "day": "01/09",
                    "forecastTime": "2020-01-09",
                    "forecastTime_stamp": 1578499200000
                },
                {
                    "aqi": 80,
                    "level": 2,
                    "desc": "良",
                    "week": "明天",
                    "day": "01/10",
                    "forecastTime": "2020-01-10",
                    "forecastTime_stamp": 1578585600000
                },
                {
                    "aqi": 90,
                    "level": 2,
                    "desc": "良",
                    "week": "周六",
                    "day": "01/11",
                    "forecastTime": "2020-01-11",
                    "forecastTime_stamp": 1578672000000
                },
                {
                    "aqi": 70,
                    "level": 2,
                    "desc": "良",
                    "week": "周日",
                    "day": "01/12",
                    "forecastTime": "2020-01-12",
                    "forecastTime_stamp": 1578758400000
                }
            ],
            weatherShow : false
        }
    }
    componentDidMount = () => {
        getWeatherDate()
            .then((res) => {
                this.setState(() => {
                    this.state.weatherData = res.data
                    this.state.fiveDayData = []
                    // 创建一个暂存数组
                    let tempArr = []
                    for (let key in res.data.forecastaqi) {
                        // 将返回的七天数据由对象添加到数组中
                        tempArr.push(res.data.forecastaqi[key])
                    }
                    // 截取前五天的数据
                    this.state.fiveDayData = tempArr.slice(0, 5)
                })
            })
            .catch((err) => {
                console.log('调用接口错误', err)
            })
    }
    // 显示隐藏天气栏功能
    toggleShow = (event) => {
        let e = event || window.event
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.setState({
            weatherShow : true
        })
    }
    toggleHide = (event) => {
        let e = event || window.event
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.setState({
            weatherShow : false
        })
    }
    render(){
        let { weatherData, fiveDayData } = this.state
        return(
            <div className={styles.weather}>
                <div className={styles.top_weather}>
                    <div className={styles.top_weather_brief} onMouseEnter={this.toggleShow} onMouseLeave={this.toggleHide} >
                        <span>{weatherData.city.pname} {weatherData.city.name}</span>
                        <b>{weatherData.condition.Ftemp}</b>
                        <i className={styles.top_weather_wea}>
                            <img src={`http://www.moji.com/templets/mojichina/images/weather/weather/w${weatherData.condition.Fprecip}.png`} />
                        </i>
                    </div>
                    <div className={`${styles.top_weather_hid} ${this.state.weatherShow ? styles.top_weather_hid_animation : styles.top_weather_hid_animation_leave}`} onMouseEnter={this.toggleShow} onMouseLeave={this.toggleHide} >
                        <div className={styles.top_forecast_title}>
                            <b>{weatherData.time.monthG}</b>
                            <span>农历 {weatherData.time.monthN}</span>
                            <a target="_blank" >更多</a>
                        </div>
                        <div className={styles.top_forecast_list}>
                            <ul>
                                {fiveDayData.map((item, index) => {
                                    return (
                                        <a>
                                            <li>
                                                <div className={styles.top_forecast_date}>
                                                    <p>{item.week}</p>
                                                    <span>{item.day}</span>
                                                    <p className={styles.top_forecast_temp}>{weatherData.forecastDayList[index].Ftemp_high}</p>
                                                </div>
                                                <div className={styles.top_forecast_wea}>
                                                    <i>
                                                        <img src={`http://www.moji.com/templets/mojichina/images/weather/weather/w${weatherData.forecastDayList[index].Ficon_day}.png`} />
                                                    </i>
                                                    <p>{weatherData.forecastDayList[index].Fcondition_day}</p>
                                                    <span>{weatherData.forecastDayList[index].Fwind_dir_day}</span>
                                                    <b className={styles.level_1}>{item.desc}</b>
                                                </div>
                                            </li>
                                        </a>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.weather_bg}>
                    <video loop="loop" autoPlay="autoplay" muted="muted">
                        <source src="http://cdn.moji.com/websrc/video/winter20191211.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}

export default Weather
