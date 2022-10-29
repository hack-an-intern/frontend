import React from 'react'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
export const Subgraph = (props) => {
    // console.log("props ", props.options);
    return (
        <>

            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={props.options}
                oneToOne={true}
            />


        </>
    )
}
