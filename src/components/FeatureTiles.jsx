

const FeatureTiles = async () => {
    const res= await fetch ('https://assignment-08-five-theta.vercel.app/data.json');
    const tiles=await res.json();
    console.log(tiles)
    return (
        <div>
            
        </div>
    );
};

export default FeatureTiles;
