### Vue ready components
Besides giving the existing Bootstrap elements a new look, we added new ones, so that the interface and consistent and homogenous.
New components are either UI components or components as Plugins which need some more information than simple props.

Below is the list of new, customized components:

- StatsCard
- ChartCard
- FormGroupInput
- PaperTable
- PaperTable
- Notification plugin
- Sidebar plugin

### StatsCard [Demo](https://cristijora.github.io/vue-paper-dashboard/#/admin/overview)

![alt text](statscard.PNG "Logo Title Text 1")

#### Usage
```vue
<stats-card>
  <div class="icon-big text-center" class="icon-success" slot="header">
    <i class="ti-server"></i>
  </div>
  <div class="numbers" slot="content">
    <p>Capacity</p>
    105GB
  </div>
  <div class="stats" slot="footer">
    <i class="ti-reload"></i> Updated now
  </div>
</stats-card>
```
#### Slots:
| Name          |
| ------------- |
| header        |
| content       |
| footer        | 


### ChartCard [Demo](https://cristijora.github.io/vue-paper-dashboard/#/admin/overview)

![alt text](chartcard.PNG "Logo Title Text 1")


#### Usage

Template
```vue
<chart-card :chart-data="chartData" :chart-options="chartOptions">
  <span slot="title">Users behavior</span>
  <span slot="subTitle"> 24 Hours performance</span>
  <span slot="footer">
    <i class="ti-reload"></i> Updated 3 minutes ago</span>
  <div slot="legend">
    <i class="fa fa-circle text-info"></i> Open
    <i class="fa fa-circle text-danger"></i> Click
    <i class="fa fa-circle text-warning"></i> Click Second Time
  </div>
</chart-card>
```
Javascript
```js
export default{
    data(){
         return {
           chartData: {
             labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
             series: [
               [287, 385, 490, 562, 594, 626, 698, 895, 952],
               [67, 152, 193, 240, 387, 435, 535, 642, 744],
               [23, 113, 67, 108, 190, 239, 307, 410, 410]
             ]
           },
           chartOptions: {
             // lineSmooth: false,
             low: 0,
             high: 1000,
             showArea: true,
             height: '245px',
             axisX: {
               showGrid: false
             },
             lineSmooth: this.$Chartist.Interpolation.simple({
               divisor: 3
             }),
             showLine: true,
             showPoint: false
           }
        }
    }
}
```


#### Props:
| Name          | Type           | Default value  | Accepted values  |
| ------------- |:-------------:| ----------------------:| -----:|
| footerText        | String |             | Any string    |
| headerTitle       | String | Chart title | Any string    |
| chartType         | String | Line        | Pie/Bar       |
| chartOptions      | Object | { }         | [Chartist chart options](https://gionkunz.github.io/chartist-js/api-documentation.html#chartistline-declaration-defaultoptions)             |
| chartData         | Object | `{labels:[], series:[]}`        | [Chartist docs](https://gionkunz.github.io/chartist-js/api-documentation.html#chartistline-function-line)             |

#### Slots:
| Name          |
| ------------- |
| title        |
| subTitle       |
| legend        | 
| footer        | 