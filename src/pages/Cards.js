import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";

function Cards() {
  const [taskList, setTaskList] = useState([
    { name: "Derrick", list: ["Derrick Lorem Ipsum 2"] },
    { name: "Maxwell", list: ["Maxwell Lorem Ipsum", "Maxwell Lorem Ipsum 2"] },
    { name: "Zazza", list: ["Zazza Lorem Ipsum", "Zazza Lorem Ipsum 2"] },
    { name: "Sam", list: ["Sam Lorem Ipsum", "Sam Lorem Ipsum 2"] },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [boardToEdit, setBoardToEdit] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isTaskEdit, setIsTaskEdit] = useState(false);
  const [toReplace, setToReplace] = useState([]);
  const handleClose = (addValue) => {
    if (addValue) {
      if (!newTask) return;
      if (isTaskEdit) {
        let updateTask = taskList;
        updateTask[boardToEdit].list[itemToEdit] = newTask;
        setTaskList(updateTask);
        setNewTask("");
      } else {
        let updateTask = taskList;
        updateTask[boardToEdit].list.push(newTask);
        setTaskList(updateTask);
        setNewTask("");
      }
    }
    setShowAddModal(false);
  };
  const handleShow = (index) => {
    setBoardToEdit(index);
    setNewTask("");
    setIsTaskEdit(false);
    setShowAddModal(true);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDragStart = (e, board, index) => {
    setToReplace([board, index]);
  };
  const editTask = (board, index) => {
    setBoardToEdit(board);
    setItemToEdit(index);
    setIsTaskEdit(true);
    setNewTask(taskList[board].list[index]);
    setShowAddModal(true);
  };
  const updateValues = (val) => {
    setTimeout(() => {
      setTaskList(val);
    }, 10);
    setToReplace([]);
  };
  const onDrop = (e, id) => {
    e.preventDefault();
    let updateTask = taskList;
    let removed = updateTask[toReplace[0]].list.splice(toReplace[1], 1);
    updateTask[id].list.push(removed[0]);
    updateValues(updateTask);
  };
  return (
    <div>
      <Container fluid="true">
        <Row className="py-5 justify-content-center">
          <Col sm="11">
            <Row className="justify-content-center">
              {taskList.map((task, index) => (
                <Col
                  md="9"
                  onDragOver={(e) => onDragOver(e)}
                  className="mb-5"
                  lg="6"
                  xl="3"
                  key={"tasks" + index}
                >
                  <Card className="shadow border-0 rounded-0">
                    <Card.Body>
                      <Card.Title>{task.name}</Card.Title>
                      <ListGroup
                        variant="flush"
                        onDropCapture={(e) => {
                          onDrop(e, index);
                        }}
                      >
                        {task.list.length > 0 && (
                          <div>
                            {task.list.map((item, i) => (
                              <ListGroup.Item
                                className="c-grab"
                                onDragStart={(e) => {
                                  onDragStart(e, index, i);
                                }}
                                draggable="true"
                                key={i}
                              >
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <img
                                      alt="grip line"
                                      draggable="false"
                                      width="20"
                                      className="mr-3"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAB0dHS0tLR5eXm3t7fc3NygoKD29vZjY2PAwMBmZmbS0tJOTk5VVVXx8fE7OztAQEBubm4REREeHh4nJyeoqKgLCwvQ0NCDg4MWFhY0NDTr6+tbW1vg4OCZmZnPBvjCAAABN0lEQVR4nO3cWVJCQRBFwQKZQZFJFBz2v0slJFyBRUU3mSs497frxYsAAAAAAAAAAAAAAAAAAAAgxWQ6GvZnNJ1c983mg14tZ5eB6+qMVOufhc/VEak2EYvqhmSLWFYnJNvGrjoh2T6qC9JZ2D4L22dh+yxsn4Xts7B9FrYvDtUFyQ4xqk5INopVdUKySXT+ULO9PJg+Vlckevp99J4eq0OS7F7+Dher8UN/xqubHn8AAAAAAID/0fvdotvb0/F6e+r+ftj3DXgY8VrdkGwSw+qEZG+xr05Idr6Db6KqA9JZ2D4L22dh+yxsn4Xts7B9d7DwVF2Q7NT5M81gsIxxdUKyRcS5uiHVJiLeqyNSXf5PE7OP6ow089n1Wf/zq8//RH3e9PgDAAAAAAAAAAAAAAAAAABwR74BUD07ZJeHcfMAAAAASUVORK5CYII="
                                    />
                                    {item}
                                  </div>
                                  <div className="c-pointer">
                                    <img
                                      src="https://image.flaticon.com/icons/png/512/84/84380.png"
                                      draggable="false"
                                      alt="edit"
                                      width="20"
                                      title="edit"
                                      onClick={() => {
                                        editTask(index, i);
                                      }}
                                    />
                                  </div>
                                </div>
                              </ListGroup.Item>
                            ))}
                          </div>
                        )}
                        {task.list.length === 0 && (
                          <ListGroup.Item onClick={() => handleShow(index)}>
                            Add or Drop Item
                          </ListGroup.Item>
                        )}
                      </ListGroup>
                      <Button
                        variant="secondary"
                        className="rounded-0 mt-3"
                        size="sm"
                        block
                        onClick={() => handleShow(index)}
                      >
                        Add Task
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal
        className="rounded-0"
        show={showAddModal}
        onHide={() => {
          handleClose(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isTaskEdit
              ? `Edit ${taskList[boardToEdit]?.name}'s task`
              : `Add task to ${taskList[boardToEdit]?.name}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            block
            className="rounded-0"
            onClick={() => {
              handleClose(true);
            }}
          >
            {isTaskEdit ? `Edit task` : `Add task`}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cards;
