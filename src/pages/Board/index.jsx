import React from "react";
import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import useBoard from "../../store/Board";

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    const updateBoard = moveColumn(board, source, destination)
    setBoard(updateBoard)
  }

  const handleCardMove = (_card, source, destination) => {
    const updateBoard = moveCard(board, source, destination)
    setBoard(updateBoard)
  }

  return (
    <div className="BoardPage py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Board 
             allowAddColumn
             allowRenameColumn
             allowRemoveCard
             onCardDragEnd={handleCardMove}
             onColumnDragEnd={handleColumnMove}
            >{board}</Board>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
