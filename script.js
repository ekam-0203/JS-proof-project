// Create a place to store the NFTs
var myNFTs = [];

// This function will create an NFT object and add it to the collection
function mintNFT(nftName, nftArtist, nftYear) {
    // Create an NFT object
    var newNFT = {
        name: nftName,
        artist: nftArtist,
        year: nftYear
    };
    // Add the NFT to the collection
    myNFTs.push(newNFT);
}

// This function will print all the NFTs in the collection
function listNFTs() {
    for (var i = 0; i < myNFTs.length; i++) {
        console.log("NFT Number: " + (i + 1));
        console.log("Name: " + myNFTs[i].name);
        console.log("Artist: " + myNFTs[i].artist);
        console.log("Year: " + myNFTs[i].year);
        console.log("--------------------");
    }
}

// This function will print the total number of NFTs created
function getTotalSupply() {
    console.log("Total NFTs: " + myNFTs.length);
}

// Minting three NFTs
mintNFT("Sunset Bliss", "Chandler Bing", 2021);
mintNFT("Mountain Majesty", "Joy Tribbiani", 2022);
mintNFT("Ocean Depths", "Ross Gellar", 2023);

// List all NFTs
listNFTs();

// Get the total supply of NFTs
getTotalSupply();
