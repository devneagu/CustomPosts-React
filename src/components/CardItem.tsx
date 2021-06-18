import { Card, CardContainer } from "./styled/CardItem";
type ElementCard = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function CardItem({ element }) {
  return (
    <Card>
      <CardContainer>
        <h3>
          {element.id}. {element.title}
        </h3>
        <p>{element.body}</p>
      </CardContainer>
    </Card>
  );
}
export default CardItem;
