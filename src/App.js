import "./App.css";
import React, { useEffect } from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Text,
  extendTheme,
  Image,
} from "@chakra-ui/react";
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  toast,
  ToastContainer
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fonts from "./Fonts";
import Headers from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Why from "./pages/Why"
import Team from "./pages/Team";
import Socials from "./pages/Socials";
import Lore from "./pages/Lore"
import { isMobile } from "react-device-detect";
import { connect } from './redux/blockchain/blockchainActions';
import {
  fetchData
} from './redux/data/dataActions';
import game_border from "./assets/jpg/game-border.jpg";
import ChromeDinoGame from 'react-chrome-dino';
import Pool from "./components/pool";

const extendedThemes = extendTheme({
  ...theme,
  fonts: {
    heading: "Minecraft",
    body: "Minecraft",
  },
  colors: {
    ...theme.colors,
    pinkBtn: "#665270",
    yellowBtn: "#665270",
  },
});
const {
  REACT_APP_CONTRACT_ADDRESS
} = process.env;

function App() {
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const {
    account,
    loading,
    smartContract
  } = blockchain;

  const handleConnect = () => {

  }
  const claimNFTs = () => {
    
  }
  const claimPresaleNFTs = () => {
    
  }

  window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

  // const getData = () => {
  //   if (blockchain.account !== '' && blockchain.smartContract !== null) {
  //     dispatch(fetchData(blockchain.account));
  //   }
  // };

  // const handleConnect = () => {
  //   dispatch(connect());
  //   getData();
  // };

  // useEffect(() => {
  //   if (!blockchain.account && !blockchain.smartContract) {
  //     handleConnect();
  //   } else {
  //     getData();
  //   }
  // }, [blockchain.account]);

  // useEffect(() => {
  //   if (blockchain.errorMsg) {
  //     toast.error(blockchain.errorMsg);
  //   }
  //   if (data.errorMsg) {
  //     toast.error(data.errorMsg);
  //   }
  // }, [blockchain.errorMsg, data.errorMsg]);

  // const claimNFTs = (count, cost) => {
  //   if (count <= 0) {
  //     return;
  //   }

  //   toast.info('Preparing your NFT...');
  //   const value = blockchain.web3.utils.toWei((cost * count).toString(), 'ether');

  //   smartContract.methods
  //     .mint(count)
  //     .send({
  //       gasLimit: '285000',
  //       to: REACT_APP_CONTRACT_ADDRESS,
  //       from: account,
  //       value,
  //     })
  //     .once('error', err => {
  //       toast.error('It seems the transaction was cancelled.');
  //     })
  //     .then(receipt => {
  //       toast.success('Woohoo! Rainbow Cats minted successfully!');
  //       dispatch(fetchData(account));
  //     });
  // };
  // const claimPresaleNFTs = async (count, cost) => {
  //   if (count <= 0) {
  //     return;
  //   }

  //   const isWhitelisted = await smartContract.methods.isWhitelisted(blockchain.account).call();
  //   if (!isWhitelisted) {
  //     toast.error('Not a whitelisted users');
  //     return;
  //   }
  //   toast.info('Preparing your NFT...');
  //   const value = blockchain.web3.utils.toWei(
  //     (cost * count).toString(),
  //     'ether'
  //   );

  //   smartContract.methods
  //     .mintPresale(count)
  //     .send({
  //       gasLimit: '285000',
  //       to: REACT_APP_CONTRACT_ADDRESS,
  //       from: account,
  //       value,
  //     })
  //     .once('error', err => {
  //       toast.error('It seems the transaction was cancelled.');
  //     })
  //     .then(receipt => {
  //       toast.success('Woohoo! Rainbow Cats minted successfully!');
  //       dispatch(fetchData(account));
  //     });
  // };

  return (
    <div className="main">
      <ChakraProvider theme={extendedThemes}>
      <Fonts />
          <div className="header-mint">
            <Headers account={
              account
            }
              onConnect={
                handleConnect
              }
            />

            <Home data={
              data
            }
              account={
                account
              }
              loading={
                loading
              }
              onMint={
                claimNFTs
              }
              onMintPresale={
                claimPresaleNFTs
              }
            />
          </div>
        <div className="pool">
        <Pool />
        </div>
        <div className="about">
          <Why /> 
          <Lore />
        </div>
        <div className="team">
          <Team />
          <Socials />
        </div>
        <ToastContainer />
      </ChakraProvider>
    </div>
  );
}
//
export default App;
