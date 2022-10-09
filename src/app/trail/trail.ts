import { ChartConfiguration, ChartOptions, ChartType, ChartTypeRegistry } from 'chart.js';


export interface Trail {
    name: String,
    subtitle: String,
    logo: String,
    graphData: ChartConfiguration<keyof ChartTypeRegistry>['data'] | undefined,
    chartOptions: ChartOptions,
    comments: String[]
}