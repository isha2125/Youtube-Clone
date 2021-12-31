
import { Button, Card, Col } from "react-bootstrap";

const CustomCard = ({title, views, uploadedAgo,uploadedBy, image}) => 
 
    <Col>
        <Card bg="dark">
            <Card.Img src={image} variant="top"/>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>{uploadedBy}</Card.Text>
                <Card.Text>{uploadedAgo} | {views} Views</Card.Text>
                <Button id="subscribe" variant="danger" >Subscribe</Button>
            </Card.Body>

        </Card>
    </Col> 


 
export default CustomCard;