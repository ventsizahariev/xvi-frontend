import React, {useState} from "react";
import Footer from "../../components/Footer/Footer";

import cx from "classnames";

import "./Home.css";

import simpleSwapIcon from "../../img/ic_simpleswaps.svg";
import costIcon from "../../img/ic_cost.svg";
import liquidityIcon from "../../img/ic_liquidity.svg";
import totaluserIcon from "../../img/ic_totaluser.svg";


import bscIcon from "../../img/ic_bsc_96.svg";
// import velasIcon from "../../img/ic_avalanche_96.svg";

import statsIcon from "../../img/ic_stats.svg";
import tradingIcon from "../../img/ic_trading.svg";

import useSWR from "swr";

import {
  formatAmount,
  bigNumberify,
  numberWithCommas,
  getServerUrl,
  USD_DECIMALS,
  getTotalVolumeSum, BSC_TESTNET,
} from "../../lib/legacy";

import { useUserStat } from "../../domain/legacy";

import TokenCard from "../../components/TokenCard/TokenCard";

import { Trans } from "@lingui/macro";
import { HeaderLink } from "../../components/Header/HeaderLink";

export default function Home({ showRedirectModal, redirectPopupTimestamp }) {
  const [openedFAQIndex, setOpenedFAQIndex] = useState(null)
  const faqContent = [{
    id: 1,
    question: "What is GMX?",
    answer: "GMX is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades.<br><br>Trading is supported by a unique multi-asset pool that earns liquidity providers fees from market making, swap fees, leverage trading (spreads, funding fees & liquidations), and asset rebalancing.<br><br>Dynamic pricing is supported by Chainlink Oracles along with TWAP pricing from leading volume DEXs."
  }, {
    id: 2,
    question: "What is the GMX Governance Token? ",
    answer: "The GMX token is the governance token of the GMX ecosystem, it provides the token owner voting rights on the direction of the GMX platform.<br><br>Additionally, when GMX is staked you will earn 30% of the platform-generated fees, you will also earn Escrowed GMX tokens and Multiplier Points."
  }, {
    id: 3,
    question: "What is the GLP Token? ",
    answer: "The GLP token represents the liquidity users provide to the GMX platform for Swaps and Margin Trading.<br><br>To provide liquidity to GLP you <a href='https://gmx.io/buy_glp' target='_blank'>trade</a> your crypto asset BTC, ETH, LINK, UNI, USDC, USDT, MIM, or FRAX to the liquidity pool, in exchange, you gain exposure to a diversified index of tokens while earning 50% of the platform trading fees and esGMX."
  }, {
    id: 4,
    question: "What can I trade on GMX? ",
    answer: "On GMX you can swap or margin trade any of the following assets: ETH, BTC, LINK, UNI, USDC, USDT, MIM, FRAX, with others to be added. "
  }]

  const toggleFAQContent = function(index) {
    if (openedFAQIndex === index) {
      setOpenedFAQIndex(null)
    } else {
      setOpenedFAQIndex(index)
    }
  }

  // BINANCE

  const bscPositionStatsUrl = getServerUrl(BSC_TESTNET, "/position_stats");
  const { data: bscPositionStats } = useSWR([bscPositionStatsUrl], {
    fetcher: (...args) => fetch(...args).then((res) => res.json()),
  });

  const bscTotalVolumeUrl = getServerUrl(BSC_TESTNET, "/total_volume");
  const { data: bscTotalVolume } = useSWR([bscTotalVolumeUrl], {
    fetcher: (...args) => fetch(...args).then((res) => res.json()),
  });


  // Total Volume
  const bscTotalVolumeSum = getTotalVolumeSum(bscTotalVolume);

  let totalVolumeSum = bigNumberify(0);
  if (bscTotalVolumeSum) {
    totalVolumeSum = totalVolumeSum.add(bscTotalVolumeSum);
  }

  // Open Interest

  let openInterest = bigNumberify(0);
  if (
    bscPositionStats &&
    bscPositionStats.totalLongPositionSizes &&
    bscPositionStats.totalShortPositionSizes
  ) {
    openInterest = openInterest.add(bscPositionStats.totalLongPositionSizes);
    openInterest = openInterest.add(bscPositionStats.totalShortPositionSizes);
  }

  // user stat
  const bscUserStats = useUserStat(BSC_TESTNET);
  let totalUsers = 0;

  if (bscUserStats && bscUserStats.uniqueCount) {
    totalUsers += bscUserStats.uniqueCount;
  }

  const LaunchExchangeButton = () => {
    return (
      <HeaderLink
        className={cx("default-btn")}
        to="/trade"
        redirectPopupTimestamp={redirectPopupTimestamp}
        showRedirectModal={showRedirectModal}
      >
        <Trans>Launch Exchange</Trans>
      </HeaderLink>
    );
  };

  return (
    <div className="Home">
      <div className="Home-top">
        {/* <div className="Home-top-image"></div> */}
        <div className="Home-title-section-container default-container">
          <div className="Home-title-section">
            <div className="Home-title">
              <Trans>
                Decentralized
                <br />
                Perpetual Exchange
              </Trans>
            </div>
            <div className="Home-description">
              <Trans>
                Trade BNB, BTC, ETH, BUSD and other top cryptocurrencies with up to 30x leverage directly from your wallet
              </Trans>
            </div>
            <LaunchExchangeButton />
          </div>
        </div>
        <div className="Home-latest-info-container default-container">
          <div className="Home-latest-info-block">
            <img src={tradingIcon} alt="trading" className="Home-latest-info__icon" />
            <div className="Home-latest-info-content">
              <div className="Home-latest-info__title">
                <Trans>Total Trading Volume</Trans>
              </div>
              <div className="Home-latest-info__value">${formatAmount(totalVolumeSum, USD_DECIMALS, 0, true)}</div>
            </div>
          </div>
          <div className="Home-latest-info-block">
            <img src={statsIcon} alt="trading" className="Home-latest-info__icon" />
            <div className="Home-latest-info-content">
              <div className="Home-latest-info__title">
                <Trans>Open Interest</Trans>
              </div>
              <div className="Home-latest-info__value">${formatAmount(openInterest, USD_DECIMALS, 0, true)}</div>
            </div>
          </div>
          <div className="Home-latest-info-block">
            <img src={totaluserIcon} alt="trading" className="Home-latest-info__icon" />
            <div className="Home-latest-info-content">
              <div className="Home-latest-info__title">
                <Trans>Total Users</Trans>
              </div>
              <div className="Home-latest-info__value">{numberWithCommas(totalUsers.toFixed(0))}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home-benefits-section">
        <div className="Home-benefits default-container">
          <div className="Home-benefit">
            <div className="Home-benefit-icon">
              <img src={liquidityIcon} alt="liquidity" className="Home-benefit-icon-symbol" />
              <div className="Home-benefit-title">
                <Trans>Reduce Liquidation Risks</Trans>
              </div>
            </div>
            <div className="Home-benefit-description">
              <Trans>
                An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe
                from temporary wicks.
              </Trans>
            </div>
          </div>
          <div className="Home-benefit">
            <div className="Home-benefit-icon">
              <img src={costIcon} alt="cost" className="Home-benefit-icon-symbol" />
              <div className="Home-benefit-title">
                <Trans>Save on Costs</Trans>
              </div>
            </div>
            <div className="Home-benefit-description">
              <Trans>
                Enter and exit positions with minimal spread and zero price impact. Get the optimal price without
                incurring additional costs.
              </Trans>
            </div>
          </div>
          <div className="Home-benefit">
            <div className="Home-benefit-icon">
              <img src={simpleSwapIcon} alt="simpleswap" className="Home-benefit-icon-symbol" />
              <div className="Home-benefit-title">
                <Trans>Simple Swaps</Trans>
              </div>
            </div>
            <div className="Home-benefit-description">
              <Trans>
                Open positions through a simple swap interface. Conveniently swap from any supported asset into the
                position of your choice.
              </Trans>
            </div>
          </div>
        </div>
      </div>
      <div className="Home-cta-section">
        <div className="Home-cta-container default-container">
          <div className="Home-cta-info">
            <div className="Home-cta-info__title">
              <Trans>Available on your preferred network</Trans>
            </div>
            <div className="Home-cta-info__description">
              <Trans>LeveragePro is currently live on Velas and Belas.</Trans>
            </div>
          </div>
          <div className="Home-cta-options">
            <div className="Home-cta-option Home-cta-option-bsc">
              <div className="Home-cta-option-icon">
                <img src={bscIcon} alt="bsc" />
              </div>
              <div className="Home-cta-option-info">
                <div className="Home-cta-option-title">BSC</div>
                <div className="Home-cta-option-action">
                  <LaunchExchangeButton />
                </div>
              </div>
            </div>
            {/*<div className="Home-cta-option Home-cta-option-ava">*/}
            {/*  <div className="Home-cta-option-icon">*/}
            {/*    <img src={avaIcon} alt="ava" />*/}
            {/*  </div>*/}
            {/*  <div className="Home-cta-option-info">*/}
            {/*    <div className="Home-cta-option-title">Avalanche</div>*/}
            {/*    <div className="Home-cta-option-action">*/}
            {/*      <LaunchExchangeButton />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <div className="Home-token-card-section">
        <div className="Home-token-card-container default-container">
          <div className="Home-token-card-info">
            <div className="Home-token-card-info__title">
              <Trans>Two tokens create our ecosystem</Trans>
            </div>
          </div>
          <TokenCard showRedirectModal={showRedirectModal} />
        </div>
      </div>

      {/* <div className="Home-video-section">
        <div className="Home-video-container default-container">
          <div className="Home-video-block">
            <img src={gmxBigIcon} alt="gmxbig" />
          </div>
        </div>
      </div> */}
      <div className="Home-faqs-section">
        <div className="Home-faqs-container default-container">
          <div className="Home-faqs-introduction">
            <div className="Home-faqs-introduction__title">FAQs</div>
            <div className="Home-faqs-introduction__description">Most asked questions. If you wish to learn more, please head to our Documentation page.</div>
            <a href="about:blank" target="_blank" className="default-btn Home-faqs-documentation">Documentation</a>
          </div>
          {/*<div className="Home-faqs-content-block">*/}
          {/*  {*/}
          {/*    faqContent.map((content, index) => (*/}
          {/*      <div className="Home-faqs-content" key={index} onClick={() => toggleFAQContent(index)}>*/}
          {/*        <div className="Home-faqs-content-header">*/}
          {/*          <div className="Home-faqs-content-header__icon">*/}
          {/*            {*/}
          {/*              openedFAQIndex === index ? <FiMinus className="opened" /> : <FiPlus className="closed" />*/}
          {/*            }*/}
          {/*          </div>*/}
          {/*          <div className="Home-faqs-content-header__text">*/}
          {/*            { content.question }*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className={ openedFAQIndex === index ? "Home-faqs-content-main opened" : "Home-faqs-content-main" }>*/}
          {/*          <div className="Home-faqs-content-main__text">*/}
          {/*            <div dangerouslySetInnerHTML={{__html: content.answer}} >*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</div>*/}
        </div>
      </div>
      <Footer showRedirectModal={showRedirectModal} redirectPopupTimestamp={redirectPopupTimestamp} />
    </div>
  );
}
