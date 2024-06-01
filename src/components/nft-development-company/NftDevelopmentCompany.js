import React from "react";
import { GiMoebiusTriangle } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import Link from "next/link";

export default function NftDevelopmentCompany() {
  return (
    <div className="container-fluid ptb-50 bg-royal ">
      <div className="container md-lg-6">
        <h1 className="text-white">
          <strong> The NFT buzz</strong>
        </h1>
        <p className="lead text-white">
          NFT or Non-fungible tokens have taken the world by storm due to their
          unique features. Providing a unique proof of ownership that is secured
          on the blockchain, NFTs have created a buzz among artists, creators,
          businesses and in every sector. Offering digital collectibles in the
          form of artwork, images, games, music, videos, GIFs, etc, NFT market
          generated over $24.9 billion in 2021 alone.
        </p>
        &nbsp;&nbsp;
        <p className="lead text-white">
          With such a large number in its portfolio, NFT is reigning in the
          world of trading. NFT provides a safe and secure way for digital
          creators to showcase their work on NFT platforms and gain high
          yielding profits from the sale. Some of the most popular NFTs are
          being minted on Ethereum, Polygon, Solana and Binance blockchains.
        </p>
        &nbsp;&nbsp;
        <p className="lead text-white">
          The choice of NFT blockchain standards like ERC 721 and ERC 1155 also
          allow the NFT artists to sell their NFTs using the best NFT pricing
          strategy.
        </p>
      </div>

      <div className="container">
        <h1 className="text-white">
          <strong> What defines an NFT?</strong>
        </h1>
        <div className="row mt-3 g-3">
          <div className="col-lg-4 text-center">
            <GiMoebiusTriangle className="poppy-blue" size={70} />
            <h5 className="mt-4 text-white">UNIQUENESS</h5>
            <p className="mt-3 ice-gray">
              This is the most differentiating feature of an NFT from any other
              trading option. Being unique, NFT cannot be interchanged and thus,
              no information about NFT can be altered. NFT also acts as a proof
              of authenticity since there is no way to create a copy or
              duplicate. For buyers, an authentic proof of ownership acts as an
              identifier for sole ownership of the digital asset.
            </p>
            <Link
              className="btn-green"
              style={{ textDecoration: "none" }}
              href="https://kalachain.com/"
              target="_blank"
            >
              VIEW POLYGON ERC721 DEMO: <br></br>KALACHAIN.COM
            </Link>{" "}
          </div>
          <div className="col-lg-4 text-center">
            <MdTexture className="poppy-blue" size={70} />
            <h5 className="mt-4 text-white">TRANSPARENT</h5>
            <p className="mt-3 ice-gray">
              Because they are developed on a decentralized ecosystem of
              blockchain, the information regarding the asset, transaction, and
              history is verified publicly. This provides a high level of
              transparency both for the seller and the buyer as they cannot be
              deleted or revoked at any point.
            </p>
            &nbsp;&nbsp;
            <Link
              className="btn-orange"
              style={{ textDecoration: "none" }}
              href="https://travictionary.com/"
              target="_blank"
            >
              VIEW POLYGON ERC1155 DEMO: TRAVICTIONARY.COM
            </Link>{" "}
          </div>
          <div className="col-lg-4 text-center">
            <BsStack className="poppy-blue" size={70} />
            <h5 className="mt-4 text-white">DIGITALLY SCARCE</h5>
            <p className="mt-3 ice-gray">
              Because the NFTs are scarce in nature and are just one of kind,
              their value increases as more and more people join the
              marketplaces. We are expertise in NFT Marketplace as well as
              independent NFT website creation. Our team of NFT web developers &
              smart contract developer provide extreme level of world class
              development.
            </p>
            <Link
              className="btn-purple"
              style={{ textDecoration: "none" }}
              href="https://jockyboaboxerclub.com/"
              target="_blank"
            >
              VIEW TRANSFORMER NFT DEMO: JOCKYBOABOXERCLUB.COM
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
