import { useEffect,useState } from "react";
import Customappbar from "../components/CustomAppBar";
import CustomCard from "../CustomCard/CustomCard";
import{ Row , Spinner } from "react-bootstrap";




function Home() {

    const [videos, setVideos] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        async function getVideos() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/videos`, { method: "GET" });
    
            const data = await response.json();
            console.info(data);
            setVideos(data);
        }
        getVideos();
       
    }, []);
   

    return (
        <div>
            <Customappbar isSearchVisible={true} onSearch={(event) => { setSearchText(event.target.value); } } />
            
                
                {videos.length === 0 ? (
                 <div className="d-flex justify-content-center">
                     <Spinner animation="grow" variant="light" className="my-auto mx-auto" />
                 </div>
                ) : (
                    <Row xs={1} md={3} className="g-4">
                        {videos
                            .filter((e) => searchText.length === 0
                                ? true
                                : e.title.toLowerCase().includes(searchText.toLowerCase()))
                            .map((e) =>  <CustomCard
                                    title={e.title}
                                    image={e.image}
                                    uploadedBy={e.uploadedBy}
                                    uploadedAgo={e.uploadedAgo}
                                    views={e.views} 
                                    
                                />
                            )}
                    </Row>
                )}
            
        </div>
        
    );
}
 
export default Home;