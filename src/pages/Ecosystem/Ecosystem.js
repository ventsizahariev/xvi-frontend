import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "../../components/Common/SEO";

import Footer from "../../components/Footer/Footer";
import { getPageTitle, BSC_TESTNET } from "../../lib/legacy";

import bscIcon from "../../img/ic_bsc_16.svg";

import "./Ecosystem.css";

const NETWORK_ICONS = {
  [BSC_TESTNET]: bscIcon,
};

const NETWORK_ICON_ALTS = {
  [BSC_TESTNET]: "bsc16Icon",
};

export default function Ecosystem() {
  const gmxPages = [
    {
      title: "LeveragePro Governance",
      link: "https://gov.gmx.io/",
      linkLabel: "gov.leveragepro.io",
      about: "LeveragePro Governance Page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Stats",
      link: "https://stats.gmx.io/",
      linkLabel: "stats.leveragepro.io",
      about: "LeveragePro Stats Page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Proposals",
      link: "https://snapshot.org/#/gmx.eth",
      linkLabel: "snapshot.org",
      about: "LeveragePro Proposals Voting page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Announcements",
      link: "https://t.me/GMX_Announcements",
      linkLabel: "t.me",
      about: "LeveragePro Announcements and Updates",
      chainIds: [BSC_TESTNET],
    },
  ];

  const communityProjects = [
    {
      title: "LeveragePro Blueberry Club",
      link: "https://www.blueberry.club/",
      linkLabel: "blueberry.club",
      about: "LeveragePro Blueberry NFTs",
      creatorLabel: "@xm92boi",
      creatorLink: "https://t.me/xm92boi",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Leaderboard",
      link: "https://www.gmx.house/",
      linkLabel: "leveragepro.house",
      about: "Leaderboard for LeveragePro traders",
      creatorLabel: "@Itburnz",
      creatorLink: "https://t.me/Itburnz",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Positions Bot",
      link: "https://t.me/GMXPositions",
      linkLabel: "t.me",
      about: "Telegram bot for LeveragePro position updates",
      creatorLabel: "@zhongfu",
      creatorLink: "https://t.me/zhongfu",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Blueberry Pulse",
      link: "https://blueberrypulse.substack.com/",
      linkLabel: "substack.com",
      about: "LeveragePro Weekly Updates",
      creatorLabel: "@puroscohiba",
      creatorLink: "https://t.me/puroscohiba",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "DegenClip",
      link: "https://degenclip.com/gmx",
      linkLabel: "degenclip.com",
      about: "Community curated tweet collection",
      creatorLabel: "@ox21l",
      creatorLink: "https://t.me/ox21l",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Yield Simulator",
      link: "https://gmx.defisims.com/",
      linkLabel: "defisims.com",
      about: "Yield simulator for LeveragePro",
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Returns Calculator",
      link: "https://docs.google.com/spreadsheets/u/4/d/1mQZlztz_NpTg5qQiYIzc_Ls1OTLfMOUtmEQN-WW8jj4/copy",
      linkLabel: "docs.google.com",
      about: "Returns calculator for LeveragePro and GLP",
      creatorLabel: "@AStoicTrader1",
      creatorLink: "https://twitter.com/AStoicTrader1",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Compound Calculator",
      link: "https://docs.google.com/spreadsheets/d/14DiIE1wZkK9-Y5xSx1PzIgmpcj4ccz1YVw5nwzIWLgI/edit#gid=0",
      linkLabel: "docs.google.com",
      about: "Optimal compound interval calculator",
      creatorLabel: "@ChasenKaminsky",
      creatorLink: "https://twitter.com/ChasenKaminsky",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Trading Stats",
      link: "https://t.me/GMXTradingStats",
      linkLabel: "t.me",
      about: "Telegram bot for Open Interest on LeveragePro",
      creatorLabel: "@SniperMonke2",
      creatorLink: "https://twitter.com/SniperMonke2",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Staking Bot",
      link: "https://t.me/GMX_Staking_bot",
      linkLabel: "t.me",
      about: "LeveragePro staking rewards updates and insights",
      creatorLabel: "@LeveragePro_Staking_bot",
      creatorLink: "https://twitter.com/GMX_Staking_bot",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Staking Calculator",
      link: "https://gmxstaking.com",
      linkLabel: "leverageprostaking.com",
      about: "LeveragePro staking calculator",
      creatorLabel: "@n1njawtf",
      creatorLink: "https://t.me/n1njawtf",
      chainIds: [BSC_TESTNET],
    },
  ];

  const dashboardProjects = [
    {
      title: "LeveragePro Referrals Dashboard",
      link: "https://www.gmxreferrals.com/",
      linkLabel: "LeverageProReferrals.com",
      about: "Dashboard for LeveragePro referral stats",
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Terminal",
      link: "https://gmxterminal.com",
      linkLabel: "LeverageProTerminal.com",
      about: "LeveragePro explorer for stats and traders",
      creatorLabel: "@vipineth",
      creatorLink: "https://t.me/vipineth",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Analytics",
      link: "https://gmxstats.com/",
      linkLabel: "LeverageProStats.com",
      about: "Financial reports and protocol analytics",
      creatorLabel: "@CryptoMessiah",
      creatorLink: "https://t.me/LarpCapital",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "TokenTerminal",
      link: "https://tokenterminal.com/terminal/projects/gmx",
      linkLabel: "tokenterminal.com",
      about: "LeveragePro fundamentals",
      creatorLabel: "@tokenterminal",
      creatorLink: "https://twitter.com/tokenterminal",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "CryptoFees",
      link: "https://cryptofees.info",
      linkLabel: "cryptofees.info",
      about: "Fees generated by LeveragePro",
      creatorLabel: "@CryptoFeesInfo",
      creatorLink: "https://twitter.com/CryptoFeesInfo",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Shogun Dashboard (Dune Arbitrum)",
      link: "https://dune.com/shogun/gmx-analytics-arbitrum",
      linkLabel: "dune.com",
      about: "Protocol analytics",
      creatorLabel: "@JamesCliffyz",
      creatorLink: "https://twitter.com/JamesCliffyz",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Shogun Dashboard (Dune Avalanche)",
      link: "https://dune.com/shogun/gmx-analytics-avalanche",
      linkLabel: "dune.com",
      about: "Protocol analytics",
      creatorLabel: "@JamesCliffyz",
      creatorLink: "https://twitter.com/JamesCliffyz",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Perpetuals Data",
      link: "https://app.laevitas.ch/altsderivs/GMX/perpetualswaps",
      linkLabel: "laevitas.ch",
      about: "LeveragePro Perpetuals Data",
      creatorLabel: "@laevitas1",
      creatorLink: "https://twitter.com/laevitas1",
      chainIds: [BSC_TESTNET],
    },
  ];

  const integrations = [
    {
      title: "DeBank",
      link: "debank.com",
      linkLabe: "debank.com",
      about: "DeFi Portfolio Tracker",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1439711532884152324",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Defi Llama",
      link: "https://defillama.com",
      linkLabel: "defillama.com",
      about: "Decentralized Finance Dashboard",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1438124768033660938",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Dopex",
      link: "https://dopex.io",
      linkLabel: "dopex.io",
      about: "Decentralized Options Protocol",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1482445801523716099",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Rook",
      link: "https://www.rook.fi/",
      linkLabel: "rook.fi",
      about: "MEV Optimizer",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/Rook/status/1509613786600116251",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Jones DAO",
      link: "https://jonesdao.io",
      linkLabel: "jonesdao.io",
      about: "Decentralized Options Strategies",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1482788805635678212",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Yield Yak",
      link: "https://yieldyak.com/",
      linkLabel: "yieldyak.com",
      about: "Yield Optimizer on Avalanche",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1484601407378378754",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Vovo Finance",
      link: "https://vovo.finance/",
      linkLabel: "vovo.finance",
      about: "Structured Products",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/VovoFinance/status/1531517177790345217",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Stabilize Protocol",
      link: "https://www.stabilize.finance/",
      linkLabel: "stabilize.finance",
      about: "Yield Vaults",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/StabilizePro/status/1532348674986082306",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "DODO",
      link: "https://dodoex.io/",
      linkLabel: "dodoex.io",
      about: "Decentralized Trading Protocol",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1438899138549145605",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Open Ocean",
      link: "https://openocean.finance/",
      linkLabel: "openocean.finance",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1495780826016989191",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Paraswap",
      link: "https://www.paraswap.io/",
      linkLabel: "paraswap.io",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/paraswap/status/1546869879336222728",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "1inch",
      link: "https://1inch.io/",
      linkLabel: "1inch.io",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1522247451410845696",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Firebird Finance",
      link: "https://app.firebird.finance/swap",
      linkLabel: "firebird.finance",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/financefirebird/status/1561767094064238595",
      chainIds: [BSC_TESTNET],
    },
  ];

  const telegramGroups = [
    {
      title: "LeveragePro",
      link: "https://t.me/GMX_IO",
      linkLabel: "t.me",
      about: "Telegram Group",
    },
    {
      title: "LeveragePro (Chinese)",
      link: "https://t.me/gmxch",
      linkLabel: "t.me",
      about: "Telegram Group (Chinese)",
    },
    {
      title: "LeveragePro (Portuguese)",
      link: "https://t.me/GMX_Portuguese",
      linkLabel: "t.me",
      about: "Telegram Group (Portuguese)",
    },
    {
      title: "LeveragePro Trading Chat",
      link: "https://t.me/gambittradingchat",
      linkLabel: "t.me",
      about: "LeveragePro community discussion",
    },
  ];

  return (
    <SEO title={getPageTitle("Ecosystem Projects")}>
      <div className="default-container page-layout">
        <div>
          <div className="section-title-block">
            <div className="section-title-icon"></div>
            <div className="section-title-content">
              <div className="Page-title">
                <Trans>LeveragePro Pages</Trans>
              </div>
              <div className="Page-description">
                <Trans>LeveragePro ecosystem pages.</Trans>
              </div>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {gmxPages.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {linkLabel}
                        </a>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Community Projects</Trans>
            </div>
            <div className="Page-description">
              <Trans>Projects developed by the LeveragePro community.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {communityProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {linkLabel}
                        </a>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <a href={item.creatorLink} target="_blank" rel="noopener noreferrer">
                          {item.creatorLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Dashboards</Trans>
            </div>
            <div className="Page-description">
              <Trans>LeveragePro dashboards and analytics.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {dashboardProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>

                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {linkLabel}
                        </a>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <a href={item.creatorLink} target="_blank" rel="noopener noreferrer">
                          {item.creatorLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*<div className="Tab-title-section">*/}
          {/*  <div className="Page-title">*/}
          {/*    <Trans>Partnerships and Integrations</Trans>*/}
          {/*  </div>*/}
          {/*  <div className="Page-description">*/}
          {/*    <Trans>Projects integrated with LeveragePro.</Trans>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="DashboardV2-projects">*/}
          {/*  {integrations.map((item) => {*/}
          {/*    const linkLabel = item.linkLabel ? item.linkLabel : item.link;*/}
          {/*    return (*/}
          {/*      <div key={item.title} className="App-card">*/}
          {/*        <div className="App-card-title">*/}
          {/*          {item.title}*/}
          {/*          <div className="App-card-title-icon">*/}
          {/*            {item.chainIds.map((network) => (*/}
          {/*              <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />*/}
          {/*            ))}*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="App-card-divider"></div>*/}
          {/*        <div className="App-card-content">*/}
          {/*          <div className="App-card-row">*/}
          {/*            <div className="label">*/}
          {/*              <Trans>Link</Trans>*/}
          {/*            </div>*/}
          {/*            <div>*/}
          {/*              <a href={item.link} target="_blank" rel="noopener noreferrer">*/}
          {/*                {linkLabel}*/}
          {/*              </a>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*          <div className="App-card-row">*/}
          {/*            <div className="label">*/}
          {/*              <Trans>About</Trans>*/}
          {/*            </div>*/}
          {/*            <div>{item.about}</div>*/}
          {/*          </div>*/}
          {/*          <div className="App-card-row">*/}
          {/*            <div className="label">*/}
          {/*              <Trans>Announcement</Trans>*/}
          {/*            </div>*/}
          {/*            <div>*/}
          {/*              <a href={item.announcementLink} target="_blank" rel="noopener noreferrer">*/}
          {/*                {item.announcementLabel}*/}
          {/*              </a>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</div>*/}
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Telegram Groups</Trans>
            </div>
            <div className="Page-description">
              <Trans>Community-led Telegram groups.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {telegramGroups.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">{item.title}</div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {linkLabel}
                        </a>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </SEO>
  );
}
