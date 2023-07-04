import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { setAsin, setModalOpen, setSelect } from "../../../../redux/reducers/bookAction";
import { fetchReview } from "../../../../redux/reducers/review";
import ModalReview from "./Modal/modal";
import "./book.css";



export default function Book({ currentBook }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.root.modeRedux.mode);

  const handleClick = () => {
    dispatch(setSelect(false));
    if (!currentBook.isSelected) {
      dispatch(setAsin(currentBook.asin));
      dispatch(fetchReview(currentBook.asin));
      dispatch(setSelect(true));
    }
  };


  return (
    <Card className={`col-3 ${currentBook.isSelected ? "select" : "noselect"}`}>
      <Card.Img variant="top" src={currentBook.img} onClick={handleClick} />
      <Card.Body className={mode === 'light' ? "bianco" : "nero"}>
        <Card.Title className="">{currentBook.title}</Card.Title>
        <Card.Text>Category: {currentBook.category}</Card.Text>
        <Card.Text>{currentBook.price} $</Card.Text>
      </Card.Body>
    </Card>
  );
}
