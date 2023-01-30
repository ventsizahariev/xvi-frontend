import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "../../components/Common/SEO";

import Footer from "../../components/Footer/Footer";
import { getPageTitle, BSC_TESTNET } from "../../lib/legacy";


import "./Ecosystem.css";
import BinanceIcon from "../../img/ic_bsc_52.svg";
import BTCIcon from "../../img/btc__icon.png";
import CommunityIcon from "../../img/community_projects_icon.png";
import DashboardIcon from "../../img/ecosystem_dashboard_icon.png";
import PartnershipIcon from "../../img/ecosystem_partnership_icon.png";
import EcosystemTelegramImg from "../../img/ecosystem_telegram.png";
import ExternalLink from "../../components/ExternalLink/ExternalLink";
import { FiChevronRight } from "react-icons/fi";
import EcosystemImg from "../../img/ecosystem.png";
const NETWORK_ICONS = {
  [BSC_TESTNET]: BinanceIcon,
};

const NETWORK_ICON_ALTS = {
  [BSC_TESTNET]: "bsc16Icon",
};

export default function Ecosystem() {
  const gmxPages = [
    {
      title: "LeveragePro Governance",
      link: "about:blank",
      linkLabel: "gov.leveragepro.io",
      about: "LeveragePro Governance Page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Stats",
      link: "about:blank",
      linkLabel: "stats.leveragepro.io",
      about: "LeveragePro Stats Page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Proposals",
      link: "about:blank",
      linkLabel: "snapshot.org",
      about: "LeveragePro Proposals Voting page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Announcements",
      link: "about:blank",
      linkLabel: "t.me",
      about: "LeveragePro Announcements and Updates",
      chainIds: [BSC_TESTNET],
    },
  ];

  const communityProjects = [
    {
      title: "LeveragePro Blueberry Club",
      link: "about:blank",
      linkLabel: "blueberry.club",
      about: "LeveragePro Blueberry NFTs",
      creatorLabel: "@xm92boi",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Leaderboard",
      link: "about:blank",
      linkLabel: "leveragepro.house",
      about: "Leaderboard for LeveragePro traders",
      creatorLabel: "@Itburnz",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Positions Bot",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram bot for LeveragePro position updates",
      creatorLabel: "@zhongfu",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Blueberry Pulse",
      link: "about:blank",
      linkLabel: "substack.com",
      about: "LeveragePro Weekly Updates",
      creatorLabel: "@puroscohiba",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "DegenClip",
      link: "about:blank",
      linkLabel: "degenclip.com",
      about: "Community curated tweet collection",
      creatorLabel: "@ox21l",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Yield Simulator",
      link: "about:blank",
      linkLabel: "defisims.com",
      about: "Yield simulator for LeveragePro",
      creatorLabel: "@kyzoeth",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Returns Calculator",
      link: "about:blank",
      linkLabel: "docs.google.com",
      about: "Returns calculator for LeveragePro and GLP",
      creatorLabel: "@AStoicTrader1",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Compound Calculator",
      link: "about:blank",
      linkLabel: "docs.google.com",
      about: "Optimal compound interval calculator",
      creatorLabel: "@ChasenKaminsky",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Trading Stats",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram bot for Open Interest on LeveragePro",
      creatorLabel: "@SniperMonke2",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Staking Bot",
      link: "about:blank",
      linkLabel: "t.me",
      about: "LeveragePro staking rewards updates and insights",
      creatorLabel: "@LeveragePro_Staking_bot",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Staking Calculator",
      link: "about:blank",
      linkLabel: "leverageprostaking.com",
      about: "LeveragePro staking calculator",
      creatorLabel: "@n1njawtf",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
  ];

  const dashboardProjects = [
    {
      title: "LeveragePro Referrals Dashboard",
      link: "about:blank",
      linkLabel: "LeverageProReferrals.com",
      about: "Dashboard for LeveragePro referral stats",
      creatorLabel: "@kyzoeth",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Terminal",
      link: "about:blank",
      linkLabel: "LeverageProTerminal.com",
      about: "LeveragePro explorer for stats and traders",
      creatorLabel: "@vipineth",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Analytics",
      link: "about:blank",
      linkLabel: "LeverageProStats.com",
      about: "Financial reports and protocol analytics",
      creatorLabel: "@CryptoMessiah",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "TokenTerminal",
      link: "about:blank",
      linkLabel: "tokenterminal.com",
      about: "LeveragePro fundamentals",
      creatorLabel: "@tokenterminal",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "CryptoFees",
      link: "about:blank",
      linkLabel: "cryptofees.info",
      about: "Fees generated by LeveragePro",
      creatorLabel: "@CryptoFeesInfo",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Shogun Dashboard (Dune Arbitrum)",
      link: "about:blank",
      linkLabel: "dune.com",
      about: "Protocol analytics",
      creatorLabel: "@JamesCliffyz",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Shogun Dashboard (Dune Avalanche)",
      link: "about:blank",
      linkLabel: "dune.com",
      about: "Protocol analytics",
      creatorLabel: "@JamesCliffyz",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "LeveragePro Perpetuals Data",
      link: "about:blank",
      linkLabel: "laevitas.ch",
      about: "LeveragePro Perpetuals Data",
      creatorLabel: "@laevitas1",
      creatorLink: "about:blank",
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
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram Group",
    },
    {
      title: "LeveragePro (Chinese)",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram Group (Chinese)",
    },
    {
      title: "LeveragePro (Portuguese)",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram Group (Portuguese)",
    },
    {
      title: "LeveragePro Trading Chat",
      link: "about:blank",
      linkLabel: "t.me",
      about: "LeveragePro community discussion",
    },
  ];

  return (
    <SEO title={getPageTitle("Ecosystem Projects")}>
      <div className="default-container page-layout ecosystem-container">
        <div>
          <div className="xvi-ecosystem-pages">
            <div className="DashboardV2-projects">
              {gmxPages.map((item) => {
                const linkLabel = item.linkLabel ? item.linkLabel : item.link;
                return (
                  <div className="App-card" key={item.title}>
                    <div className="App-card-title">
                      <div className="App-card-title-group">
                        <span className="App-card-title-content">{item.title}</span>
                        <div className="App-card-title-desc">{item.about}</div>
                      </div>
                      <div className="App-card-title-icon">
                        <img width="16" src={BinanceIcon} />
                        <img width="16" src={BTCIcon} />
                      </div>
                    </div>
                    <div className="App-card-divider"></div>
                    <div className="App-card-content">
                      <div className="eco-btn">
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                        <FiChevronRight />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="DashboardV2-projects-header">
              <div className="DashboardV2-project-title">
                <div className="project-title">
                  <Trans>XVI Pages</Trans>
                </div>
                <div className="project-desc">
                  <Trans>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Trans>
                </div>
              </div>
              <img src={EcosystemImg} />
            </div>
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <img src={CommunityIcon} />
              <Trans>Community Projects</Trans>
            </div>
            <div className="Page-description">
              <Trans>
                Projects developed by the XVI community. <br />
                Please exercise caution when interacting with any app, apps are fully maintained by community
                developers.
              </Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {communityProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    <div className="App-card-title-group">
                      <span className="App-card-title-content">{item.title}</span>
                      <div className="App-card-title-desc">{item.about}</div>
                    </div>
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                      <img width="16" src={BTCIcon} />
                    </div>
                  </div>
                  <div className="App-card-divider" />
                  <div className="App-card-content">
                    <div className="eco-btn">
                      <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      <FiChevronRight />
                    </div>

                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <img src={DashboardIcon} />
              <Trans>Dashboards</Trans>
            </div>
            <div className="Page-description">
              <Trans>GMX dashboards and analytics.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {dashboardProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    <div className="App-card-title-group">
                      <span className="App-card-title-content">{item.title}</span>
                      <div className="App-card-title-desc">{item.about}</div>
                    </div>
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                      <img width="16" src={BTCIcon} />
                    </div>
                  </div>

                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="eco-btn">
                      <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      <FiChevronRight />
                    </div>

                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <img src={PartnershipIcon} />
              <Trans>Partnerships and Integrations</Trans>
            </div>
            <div className="Page-description">
              <Trans>Projects integrated with GMX.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {integrations.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div key={item.title} className="App-card">
                  <div className="App-card-title">
                    <div className="App-card-title-group">
                      <span className="App-card-title-content">{item.title}</span>
                      <div className="App-card-title-desc">{item.about}</div>
                    </div>
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                      <img width="16" src={BTCIcon} />
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="eco-btn">
                      <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      <FiChevronRight />
                    </div>

                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Announcement</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.announcementLink}>{item.announcementLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="xvi-ecosystem-pages last-eco-page">
            <div className="DashboardV2-projects-header">
              <div className="DashboardV2-project-title">
                <div className="project-title">
                  <Trans>Telegram Groups</Trans>
                </div>
                <div className="project-desc">
                  <Trans>Community-led Telegram groups.</Trans>
                </div>
              </div>
              <img src={EcosystemTelegramImg} />
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
                          <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
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
        </div>
      </div>
      <Footer />
    </SEO>
  );
}
