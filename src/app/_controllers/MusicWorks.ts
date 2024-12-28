interface MusicMetadata {
    videoId: string,
    image: string,
    title: string,
    comment: string,
}

const LatestWork: MusicMetadata = { // Create an object of type MusicMetadata
    videoId: "vRf5UtbauGw",
    image: "/images/_albums/latest_album.png",
    title: "Luminous",
    comment: "Epic Orchestral Original Mix",
};

const FirstWork: MusicMetadata = { // Create an object of type MusicMetadata
    videoId: "3tDbSMUWlo0",
    image: "/images/_albums/first_album.png",
    title: "Faith",
    comment: "Epic Orchestral Original Mix",
};
const SecondWork: MusicMetadata = { // Create an object of type MusicMetadata
    videoId: "_2eQ0SYDssM",
    image: "/images/_albums/second_album.png",
    title: "葬",
    comment: "Epic Orchestral Original Mix",
};
const ThirdWork: MusicMetadata = { // Create an object of type MusicMetadata
    videoId: "CWjIHG8apwg",
    image: "/images/_albums/third_album.png",
    title: "Home",
    comment: "Epic Orchestral Original Mix",
};

export { LatestWork, FirstWork, SecondWork, ThirdWork }