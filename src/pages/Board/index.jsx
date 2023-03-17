import React from "react";
import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import useBoard from "../../store/Board";
import { RxCross2 } from "react-icons/rx";
import {IoMdAdd} from 'react-icons/io'

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    const updateBoard = moveColumn(board, source, destination);
    setBoard(updateBoard);
  };

  const handleCardMove = (_card, source, destination) => {
    const updateBoard = moveCard(board, source, destination);
    setBoard(updateBoard);
  };

  const getColumns = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );
    return column[0];
  };

  const getGradient = (card) => {
    const column = getColumns(card);
    const title = column.title;
    if (title === "TODO") {
      return {
        backgroundColor: "#aaa",
        padding: 10,
        borderRadius: 10,
      };
    } else if (title === "Doing") {
      return {
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 10,
      };
    } else if (title === "Completed") {
      return {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
      };
    } else if (title === "Backlog") {
      return {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10,
      };
    }
  };

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
              renderCard={(props) => (
                <div
                  style={getGradient(props)}
                  key={props.id}
                  className="cards d-flex align-items-start justify-content-between mt-3"
                >
                  <div className="w-100">
                    <h5 className="">{props.title}</h5>
                    <p className="mt3">{props.description}</p>
                  </div>
                  <button
                    className="btn  d-flex align-items-center justify-content-center"
                    onClick={() => {
                      const updateBoard = removeCard(
                        board,
                        getColumns(props),
                        props
                      );
                      setBoard(updateBoard);
                    }}
                  >
                    <RxCross2 color="black" size={15} />
                  </button>
                </div>
              )}
              renderColumnHeader={(props) => {
                return (
                  <div className="cards d-flex justify-content-between">
                    <h3>{props.title}</h3>
                    <IoMdAdd color="black" size={25} title="Add To Card" />
                  </div>
                );
              }}
            >
              {board}
            </Board>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
