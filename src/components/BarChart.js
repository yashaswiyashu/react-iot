import React, { useEffect, useState } from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts';
import AWS from 'aws-sdk';

const BarChart = () => {
    const [options, setOptions] = useState({});
    const [Data, setData] = useState({});

    let awsConfig = {
        "region": "ap-south-1",
        "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
        "accessKeyId": "AKIAQJOKZ6BSIRLOTU6U", 
        "secretAccessKey": "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"
    };
    AWS.config.update(awsConfig);
    let docClient = new AWS.DynamoDB.DocumentClient();

    useEffect(() => {
        let fetchAllData = async () => {
            var params = {
                TableName: "RscSys_Iot_table",
                Key: {
                    "Device Id": "6532395943",
                }
            };
            await docClient.get(params, function (err, data) {
                if (err) {
                    setData(err);
                    // console.log("user_table::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
                }
                else {
                    if(data !== Data){
                        setData(data);
                        setOptions({
                            animationEnabled: true,
                            theme: "light2",
                            title:{
                                text: `Live Data From AWS IOT Core`
                            },
                            axisX: {
                                title: "Attributes",
                                reversed: true,
                            },
                            axisY: {
                                title: `Temperature=${Data.Item.payload.temp} Humidity=${Data.Item.payload.humid}`,
                                includeZero: true,
                            },
                            data: [{
                                type: "bar",
                                dataPoints: [
                                    { y:  Data.Item.payload.temp, label: "Temperature" },
                                    { y:  Data.Item.payload.humid, label: "Humidity" },
                                ]
                            }]
                        })
                    }
                    // console.log("user_table::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
                }
            })
        }
        fetchAllData();
    }, [Data, options]);
  return (
    <div>
      <CanvasJSChart options={options}/>
    </div>
  )
}

export default BarChart
