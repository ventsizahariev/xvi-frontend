import React, { useCallback, useState } from "react";
import "./BuyLeveragePro.css";

import { BSC_TESTNET, switchNetwork, useChainId } from "../../lib/legacy";

import { useWeb3React } from "@web3-react/core";

import Synapse from "../../img/ic_synapse.svg";
import Multiswap from "../../img/ic_multiswap.svg";
import Hop from "../../img/ic_hop.svg";
import Banxa from "../../img/ic_banxa.svg";
import Binance from "../../img/binance_52.png";

// import gmxArbitrum from "../../img/ic_gmx_arbitrum.svg";
// import gmxAvax from "../../img/ic_gmx_avax.svg";
// import ohmArbitrum from "../../img/ic_olympus_arbitrum.svg";
import Button from "../../components/Common/Button";
import SpiderIcon from "../../img/spider_icon.png";
import { Trans, t } from "@lingui/macro";
import Modal from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";
import Card from "../../components/Common/Card";
import Binance1 from "../../img/binance_1.png";
import Binance2 from "../../img/binance_2.png";
import binanceIcon from "../../img/binance_rounded_icon.png";

import VelasIcon from "../../img/velas_rounded_icon.png";
import avaxIcon from "../../img/avax_rounded_icon.png";
import maticIcon from "../../img/matic_icon.png";
import ethIcon from "../../img/eth_rounded_icon.png";
import BTCIcon from "../../img/bitcoin_rounded_icon.png";
import BinanceTitleIcon from "../../img/binance_52.png";
export default function BuyLeveragePro(props) {
  const { chainId } = useChainId();
  const { active } = useWeb3React();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onNetworkSelect = useCallback(
    (value) => {
      if (value === chainId) {
        return;
      }
      return switchNetwork(value, active);
    },
    [chainId, active]
  );

  const modalHeader = () => {
    return (
      <>
        <img src={BinanceTitleIcon} width={52} height={52} />
        <span className="buy-gmx-modal-title">
          <Trans>Buy on Binance</Trans>
        </span>
      </>
    );
  };

  const transferEthList = [
    {
      name: "Velas",
      link: "https://synapseprotocol.com/?inputCurrency=ETH&outputCurrency=ETH&outputChain=42161",
      icon: VelasIcon,
    },
    {
      name: "Avax",
      link: "https://www.avax.network/",
      icon: avaxIcon,
    },
    {
      name: "Matic",
      link: "https://www.quicknode.com/chains/matic/",
      icon: maticIcon,
    },
    {
      name: "Binance",
      link: "https://www.binance.com/",
      icon: binanceIcon,
    },
    {
      name: "ETH",
      link: "https://www.chainstack.com/",
      icon: ethIcon,
    },
    {
      name: "Bitcoin",
      link: "https://bitcoin.org",
      icon: BTCIcon,
    },
  ];
  return (
    <>
      <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible} label={modalHeader()}>
        <div className="BuyGMXGLP  page-layout">
          <div className="BuyGMXGLP-container">
            <div className="cards-row">
              {chainId === BSC_TESTNET && (
                <Card
                  title={t`Buy / Transfer BNB`}
                  subtitle={t`Lorem Ipsum is simply dummy text of the printing`}
                  icon={Binance1}
                >
                  <div className="App-card-content">
                    <div className="exchange-info-group">
                      <div className="BuyGMXGLP-description-1">
                        <Trans>Buy BNB</Trans>
                      </div>
                      <div className="BuyGMXGLP-description">
                        <Trans>BNB is needed on Binance to purchase XVI.</Trans>
                      </div>
                      <div className="buttons-group col-1">
                        <Button imgSrc={binanceIcon} href="https://www.binance.com/" className="binance-btn">
                          Binance
                        </Button>
                      </div>
                    </div>
                    <div className="exchange-info-group">
                      <div className="BuyGMXGLP-description-1">
                        <Trans>Transfer ETH</Trans>
                      </div>
                      <div className="BuyGMXGLP-description">
                        <Trans>
                          You can transfer ETH from other networks to Binance using any of the below options:
                        </Trans>
                      </div>
                      <div className="buttons-group col-3">
                        {transferEthList.map((item, index) => (
                          <Button key={index} href={item.link} align="left" imgSrc={item.icon}>
                            <Trans>{item.name}</Trans>
                          </Button>
                        ))}
                        {/* <Button
                    href="https://synapseprotocol.com/?inputCurrency=ETH&outputCurrency=ETH&outputChain=42161"
                    align="left"
                    imgSrc={Synapse}
                  >
                    <Trans>Synapse</Trans>
                  </Button>
                  <Button href="https://app.multichain.org/#/router" align="left" imgSrc={Multiswap}>
                    <Trans>Multiswap</Trans>
                  </Button>
                  <Button
                    href="https://app.hop.exchange/send?token=ETH&sourceNetwork=ethereum&destNetwork=arbitrum"
                    align="left"
                    imgSrc={Hop}
                  >
                    <Trans>Hop</Trans>
                  </Button>
                  <Button href="https://binance.com/" align="left" imgSrc={Binance}>
                    <Trans>Binance</Trans>
                  </Button> */}
                      </div>
                    </div>
                  </div>
                </Card>
              )}
              {/* {chainId === BSC_TESTNET && (
          <div className="section-title-block">
            <div className="section-title-content">
              <div className="Page-title">
                <Trans>Buy / Transfer BNB</Trans>
              </div>
              <div className="Page-description">
                <Trans>BNB is needed on Binance to purchase LeveragePro.</Trans>
                <br />
                {/*<Trans>*/}
              {/*  To purchase GMX on <span onClick={() => onNetworkSelect(AVALANCHE)}>Avalanche</span>, please change*/}
              {/*  your network.*/}
              {/*</Trans>*/}
              {/*</div>
            </div>
          </div>
        )}*/}
              {chainId === BSC_TESTNET && (
                <Card
                  title={t`Buy XVI Token`}
                  subtitle={t`Lorem Ipsum is simply dummy text of the printing`}
                  icon={Binance2}
                >
                  <div className="App-card-content">
                    <div className="exchange-info-group">
                      <div className="BuyGMXGLP-description-1">
                        <Trans>Purchase XVI Token</Trans>
                      </div>
                      <div className="BuyGMXGLP-description">
                        <Trans>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Trans>
                      </div>
                      <div className="buttons-group">
                        {/* <Button
                    href="https://gmx.banxa.com?coinType=ETH&fiatType=USD&fiatAmount=500&blockchain=arbitrum"
                    imgSrc={Banxa}
                    >
                    <Trans>Banxa</Trans>
                    </Button> */}
                        {transferEthList.map((item, index) => (
                          <Button key={index} href={item.link} align="left" imgSrc={item.icon}>
                            <Trans>{item.name}</Trans>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )}
              {/* <div className="BuyGMXGLP-panel">
            <div className="App-card no-height">
              <div className="App-card-title">
                <Trans>Buy BNB</Trans>
              </div>
              <div className="App-card-divider"></div>
              <div className="App-card-content">
                <div className="BuyGMXGLP-description">
                  <Trans>
                    You can buy BNB directly on{" "}
                    <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer">
                      Binance
                    </a>{" "}
                    using Banxa:
                  </Trans>
                </div>
                <div className="direct-purchase-options">
                  <Button
                    href="https://gmx.banxa.com?coinType=ETH&fiatType=USD&fiatAmount=500&blockchain=arbitrum"
                    imgSrc={Banxa}
                  >
                    <Trans>Banxa</Trans>
                  </Button>
                </div>
              </div>
            </div> */}
              {/* <div className="App-card no-height">
              <div className="App-card-title">
                <Trans>Transfer ETH</Trans>
              </div>
              <div className="App-card-divider"></div>
              <div className="App-card-content">
                <div className="BuyGMXGLP-description">
                  <Trans>You can transfer ETH from other networks to Binance using any of the below options:</Trans>
                </div>
                <div className="bridge-options">
                  <Button
                    href="https://synapseprotocol.com/?inputCurrency=ETH&outputCurrency=ETH&outputChain=42161"
                    align="left"
                    imgSrc={Synapse}
                  >
                    <Trans>Synapse</Trans>
                  </Button>
                  <Button href="https://app.multichain.org/#/router" align="left" imgSrc={Multiswap}>
                    <Trans>Multiswap</Trans>
                  </Button>
                  <Button
                    href="https://app.hop.exchange/send?token=ETH&sourceNetwork=ethereum&destNetwork=arbitrum"
                    align="left"
                    imgSrc={Hop}
                  >
                    <Trans>Hop</Trans>
                  </Button>
                  <Button href="https://binance.com/" align="left" imgSrc={Binance}>
                    <Trans>Binance</Trans>
                  </Button>
                </div>
              </div>
            </div> */}
              {/* </div>
        )} */}
              {/* {chainId === AVALANCHE && (
          <div className="section-title-block">
            <div className="section-title-content">
              <div className="Page-title">
                <Trans>Buy / Transfer AVAX</Trans>
              </div>
              <div className="Page-description">
                <Trans>Avax is needed on Avalanche to purchase GMX.</Trans>
                <br />
                <Trans>
                  {" "}
                  To purchase GMX on <span onClick={() => onNetworkSelect(ARBITRUM)}>Arbitrum</span>, please change your
                  network.
                </Trans>
              </div>
            </div>
          </div>
        )} */}
              {/* {chainId === AVALANCHE && (
          <div className="BuyGMXGLP-panel">
            <div className="App-card no-height">
              <div className="App-card-title">
                <Trans>Buy AVAX</Trans>
              </div>
              <div className="App-card-divider"></div>
              <div className="App-card-content">
                <div className="BuyGMXGLP-description">
                  <Trans>
                    You can buy AVAX directly on{" "}
                    <a href="https://www.avax.network/" target="_blank" rel="noopener noreferrer">
                      Avalanche
                    </a>{" "}
                    using Banxa:
                  </Trans>
                </div>
                <div className="direct-purchase-options">
                  <Button
                    href="https://gmx.banxa.com?coinType=AVAX&fiatType=USD&fiatAmount=500&blockchain=avalanche"
                    imgSrc={Banxa}
                  >
                    <Trans>Banxa</Trans>
                  </Button>
                </div>
              </div>
            </div>
            <div className="App-card no-height">
              <div className="App-card-title">
                <Trans>Transfer AVAX</Trans>
              </div>
              <div className="App-card-divider"></div>
              <div className="App-card-content">
                <div className="BuyGMXGLP-description">
                  <Trans>You can transfer AVAX to Avalanche using any of the below options.</Trans> <br />
                  <br />
                  <Trans>
                    Using the Avalanche or Synapse bridges, you can also transfer any other supported cryptocurrency,
                    and receive free AVAX to pay for the network's fees.
                  </Trans>
                </div>
                <div className="bridge-options">
                  <Button align="left" href="https://bridge.avax.network/" imgSrc={avax30Icon}>
                    <Trans>Avalanche</Trans>
                  </Button>
                  <Button align="left" href="https://synapseprotocol.com/" imgSrc={Synapse}>
                    <Trans>Synapse</Trans>
                  </Button>
                  <Button align="left" href="https://app.multichain.org/" imgSrc={Multiswap}>
                    <Trans>Multiswap</Trans>
                  </Button>
                  <Button align="left" href="https://binance.com" imgSrc={Binance}>
                    <Trans>Binance</Trans>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )} */}
              {/* {chainId === BSC_TESTNET && (
          <div className="BuyGMXGLP-panel">
            <div className="buy-card">
              <div className="section-title-content">
                <div className="card-title">
                  <Trans>Buy LeveragePro</Trans>
                </div>
              </div>
              <div className="App-card no-height">
                <div className="App-card-content no-title">
                  <div className="BuyGMXGLP-description better-rates-description">
                    <Trans>
                      After you have BNB, set your network to{" "}
                      <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer">
                        Binance
                      </a>{" "}
                      then click the button below:
                    </Trans>
                  </div>
                  <div className="direct-purchase-options">
                    <Button
                      size="xl"
                      imgSrc={gmxAvax}
                      href="https://traderjoexyz.com/trade?outputCurrency=0x62edc0692BD897D2295872a9FFCac5425011c661#/"
                    >
                      <Trans>Purchase LeveragePro</Trans>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

              {/* {chainId === ARBITRUM && (
          <div className="BuyGMXGLP-panel">
            <div className="buy-card">
              <div className="section-title-content">
                <div className="card-title">
                  <Trans>Buy GMX</Trans>
                </div>
              </div>
              <div className="App-card no-height">
                <div className="App-card-content no-title">
                  <div className="BuyGMXGLP-description better-rates-description">
                    <Trans>
                      After you have ETH, set your network to{" "}
                      <a href="https://arbitrum.io/bridge-tutorial/" target="_blank" rel="noopener noreferrer">
                        Arbitrum
                      </a>{" "}
                      then click the button below:
                    </Trans>
                  </div>
                  <div className="buy-gmx">
                    <Button
                      size="xl"
                      imgSrc={gmxArbitrum}
                      href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a"
                    >
                      <Trans>Purchase GMX</Trans>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-card">
              <div className="section-title-content">
                <div className="card-title">
                  <Trans>Buy GMX Bonds</Trans>
                </div>
              </div>
              <div className="App-card no-height">
                <div className="App-card-content no-title">
                  <div className="BuyGMXGLP-description">
                    <Trans>GMX bonds can be bought on Olympus Pro with a discount and a small vesting period:</Trans>
                  </div>
                  <div className="buy-gmx">
                    <Button size="xl" imgSrc={ohmArbitrum} href="https://pro.olympusdao.finance/#/partners/GMX">
                      <Trans>Olympus Pro</Trans>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
            </div>
          </div>
        </div>
      </Modal>
      <>
        {!props.isModal ? (
          <NavLink onClick={() => setIsModalVisible(true)} className="buy-btn" to="#">
            <Trans>Buy on Binance</Trans>
          </NavLink>
        ) : (
          <NavLink onClick={() => setIsModalVisible(true)} className="App-button-option-dark App-card-option" to="#">
            <span>
              <Trans>Buy XVI Token</Trans>
            </span>
          </NavLink>
        )}
      </>
    </>
  );
}
