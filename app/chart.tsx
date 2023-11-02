import { getIssues } from './issue'
import { getOngoing, getClosed, getOpen } from '@/app/reqs'
import { Container } from '@mui/material';


import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);
import { Doughnut} from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';

const ChartData = async () => {

const {issues}=await getIssues()
const total=issues.length

const{open}=await getOpen()
const {closed}=await getClosed()
const {ongoing}=await getOngoing()
    
  return (
   <Container className='flex justify-between'>
    <div className="ml-5"style={{width:300}}>
    <Doughnut 
      data={{
        labels:['Open', 'Closed', 'Ongoing'],
        datasets: [{
          label: 'Issues',
          data: [open, closed, ongoing],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }} />

    </div>
    <div
    style={{width:600}}>
      <Bar 
        data={{
          labels: ['Total','Open', 'Closed', 'Ongoing'],
          datasets: [{
            label: 'Issues',
            data: [total, open, closed, ongoing],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)'
            ],
            borderWidth: 1
          }]
        }}/>
    </div>
    
   </Container>
  )
}

export default ChartData