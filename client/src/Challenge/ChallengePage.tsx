import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';

const demoChallenge = {
  title: 'Market Making',
  parts: [
    {
      title: 'Part 1: What is Arbitrage?',
      profit: 467,
      started: true,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
    },
    {
      title: 'Part 2',
      profit: 467,
      started: true,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
    },
    {
      title: 'Part 3',
      profit: 467,
      started: false,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
    },
    {
      title: 'Part 4',
      profit: 467,
      started: false,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
    },
  ],
};

function ChallengePage() {
  return (
    <Box
      sx={{
        background: '#D9D9D9',
        width: '100%',
        height: '100vh',
        padding: '50px',
      }}
    >
      <Box
        sx={{
          background: 'rgba(47, 143, 255, 0.22)',
          borderRadius: '15px',
          width: 'fit-content',
          padding: '20px',
        }}
      >
        <Typography variant="h4">Challenge: {demoChallenge.title}</Typography>
      </Box>
      <Box>
        <Timeline position="right" sx={{ width: '10vw' }}>
          {demoChallenge.parts.map((part, i) => {
            return (
              <TimelineItem key={part.title}>
                <TimelineSeparator>
                  <TimelineDot color={part.started ? 'primary' : 'grey'} />
                  {demoChallenge.parts.length - 1 > i && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">{part.title}</Typography>
                  <Stack direction="row" spacing={2}>
                    <Chip
                      label={`proft: $${part.profit}`}
                      sx={{
                        background: 'rgba(4, 182, 0, 0.53)',
                        color: 'white',
                      }}
                    />
                    <Chip
                      label={`rank: ${part.rank.place}/${part.rank.total}`}
                      sx={{
                        background: 'rgba(182, 11, 0, 0.53)',
                        color: 'white',
                      }}
                    />
                    <Chip
                      label={`score: ${part.score}`}
                      sx={{
                        background: 'rgba(0, 116, 182, 0.53)',
                        color: 'white',
                      }}
                    />
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
    </Box>
  );
}

export default ChallengePage;
