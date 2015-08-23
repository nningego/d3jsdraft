var chart = c3.generate({
    oninit: function() {
        d3.select("svg").append("text")
            .attr("x", 100)
            .attr("y", 50)
            .text("Aon Center Weather Forecast");
    },
    bindto: '#weather-chart',
    data: {
        url: 'aon_daily_weather.json',
        mimeType: 'json',
        keys: {
            x: 'time',
            value: ['temperatureMax', 'temperatureMin', 'precipIntensityMax']
        },
        types: {
            temperatureMin: "spline",
            temperatureMax: "spline",
            precipIntensityMax: "bar"
        },
        names: {
            temperatureMin: "Temperature Low",
            temperatureMax: "Temperature High",
            precipIntensityMax: "Precipitation Max"
        },
        colors: {
            temperatureMin: 'red',
            temperatureMax: 'orange',
            precipIntensityMax: 'turquoise'
        },
        axes: {
            temperatureMax: 'y',
            precipIntensityMax: 'y2'
        }
    },

    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%A'
            },
            label: {
                text: 'Day of Week',
                position: 'outer-center'
            }
        },
        y: {
            max: 100,
            min: 30,
            label: {
                text: 'Temperature (Fahrenheit)',
                position: 'outer-middle'
            }
        },
        y2: {
            show: true,
            max: 0.5,
            label: {
                text: 'Precipitation (Inches)',
                position: 'outer-middle'
            }
        }
    },
    padding: {
        top: 80
    },
    size: {
        height: 400
    },

    legend: {
        position: 'inset',
        inset: {
            anchor: 'top-right',
            x: 80,
            y: -50,
        }
    },

});