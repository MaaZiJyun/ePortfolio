
const generateRandomColor = () => {
    const letters = "456789ABC";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 9)];
    }
    return color;
};

export default generateRandomColor;