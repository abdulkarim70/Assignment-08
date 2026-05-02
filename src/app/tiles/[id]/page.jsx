
const TilesDetails = async ({params}) => {
    const {id}=await params
    console.log(id);
    return (
        <div>
            tailes details page
        </div>
    );
};

export default TilesDetails;