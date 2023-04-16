/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tab,
  Tabs,
} from '@mui/material';
import LeaderboardTable from './LeaderboardTable';
import Forum from './Forum';
import DiscussionTable from './DiscussionTable';

const demoChallenge = {
  title: 'Market Making',
  parts: [
    {
      title: 'Part 1: Understanding Market Making',
      profit: 467,
      started: true,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
      content: `Market making is the practice of creating liquidity in financial markets by buying and selling securities at bid and ask prices. Market makers are typically banks or other financial institutions that trade large volumes of securities on a daily basis. Market makers profit by buying securities at a lower price and selling them at a higher price, earning the difference between the bid and ask prices. Market makers play a crucial role in maintaining an orderly and efficient market by ensuring that buyers and sellers can easily trade securities without experiencing significant price movements.

      To become a successful market maker, it's essential to have a deep understanding of the financial markets, including the specific securities being traded, the economic factors that influence their prices, and the behavior of other market participants. Market makers must also be skilled in risk management, as they often hold significant positions in securities and must manage the risk of adverse price movements.`,
    },
    {
      title: 'Part 2: Analyzing Market Conditions',
      profit: 467,
      started: true,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
      content: `To be successful in market making, it's essential to analyze market conditions and identify profitable trading opportunities. Market makers use a variety of tools and techniques to analyze market conditions, including technical analysis, fundamental analysis, and market sentiment analysis. Technical analysis involves studying price charts and identifying patterns that can indicate potential price movements, while fundamental analysis involves analyzing financial data and economic indicators to assess the underlying value of securities.

      Market sentiment analysis involves analyzing the attitudes and opinions of other market participants, such as institutional investors, analysts, and news outlets, to gauge market sentiment and anticipate potential price movements. By combining these different types of analysis, market makers can identify profitable trading opportunities and execute trades that earn a profit.`,
    },
    {
      title: 'Part 3: Executing Trades',
      profit: 467,
      started: false,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
      content: `Once a market maker has identified a profitable trading opportunity, the next step is to execute trades that capitalize on that opportunity. Market makers use a variety of trading strategies to execute trades, including limit orders, market orders, and algorithmic trading. Limit orders are orders to buy or sell securities at a specific price, while market orders are orders to buy or sell securities at the best available price.

      Algorithmic trading involves using computer algorithms to execute trades automatically based on pre-defined rules and parameters. By using these different trading strategies, market makers can execute trades quickly and efficiently, reducing the risk of adverse price movements and maximizing profits.`,
    },
    {
      title: 'Part 4: Managing Risk',
      profit: 467,
      started: false,
      rank: {
        place: 1,
        total: 10,
      },
      score: 20,
      content: `Finally, successful market makers must be skilled in managing risk. Market making involves holding significant positions in securities, which can expose market makers to significant risks if the market moves against them. To manage this risk, market makers use a variety of risk management techniques, including diversification, hedging, and position sizing.

      Diversification involves spreading investments across a range of different securities and asset classes to reduce overall risk. Hedging involves using derivative contracts, such as options and futures, to offset potential losses in securities positions. Position sizing involves carefully managing the size of securities positions to ensure that losses are limited in the event of adverse price movements. By using these risk management techniques, market makers can minimize risk and maximize profits over the long term.`,
    },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ChallengePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        background: 'inherit',
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
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Instructions" />
        <Tab label="Leaderboard" />
        <Tab label="Discussion" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <Box sx={{ paddingTop: '20px' }}>
            {demoChallenge.parts.map((part) => {
              return (
                <Accordion sx={{ width: '75vw' }}>
                  <AccordionSummary id="panel1a-header">
                    <Typography>{part.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ whiteSpace: 'pre-line' }}>
                      {part.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LeaderboardTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DiscussionTable />
      </TabPanel>
    </Box>
  );
}

export default ChallengePage;
