import React from 'react'
import "../index.css";
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const HomeChart = () => {
    return <Container>
        {/*Bar is chartjs Bar graph*/}
        <Bar
            /*Setting data for graph such as colors and labels*/
            data={{
                labels: ['Compliant', 'Soon to Expire', 'Expired'],
                datasets: [{
                    label: 'Compliance Status of your Documents',
                    data: [18, 12, 1],
                    backgroundColor: [
                        '#009ADE',
                        '#3A4856',
                        'red',
                    ],
                    borderColor: [
                        '#009ADE',
                        '#3A4856',
                        'red',
                    ],
                    borderWidth: 1
                }]
            }}
            /*Setting dimentions for graph*/
            height={100}
            width={100}
        />
    </Container>
}

const Container = styled.div`
    left: 50%;
    width: 300px;
`

export default HomeChart
