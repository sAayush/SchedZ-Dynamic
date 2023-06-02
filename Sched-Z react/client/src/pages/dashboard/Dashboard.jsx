import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import "./Dashboard.scss";
import "./background.css";
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboard = () => {


    const [timeLinePosts, setTimeLinePosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await axios.get("http://localhost:8080/schedule/get-all");
                setTimeLinePosts(res.data.data)

            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
    }, [])




    return (
        <div className="dashboard">
            <div className="timeLineSection">
                <Timeline position="alternate">

                    {
                        timeLinePosts.map((data, index) => {
                            return (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                    >
                                        {data.time}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot sx={{
                                            background: data.bg
                                        }}>
                                            <MenuBookIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            {data.title}
                                        </Typography>
                                        <Typography>{data.desc}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        })
                    }
                </Timeline>
            </div>
        </div>
    )
}

export default Dashboard