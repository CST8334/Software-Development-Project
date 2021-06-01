import React from 'react'
import "../index.css";
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const HomeChart = () => {
    return <Container>
        <Bar
            data={{
                labels: ['Compliant', 'Soon to Expire', 'Expired'],
                datasets: [{
                    label: 'Compliance Status of your Documents',
                    data: [18, 12, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
            }}
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
