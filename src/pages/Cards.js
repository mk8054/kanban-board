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
                                      width="10"
                                      className="mr-3"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAB0dHS0tLR5eXm3t7fc3NygoKD29vZjY2PAwMBmZmbS0tJOTk5VVVXx8fE7OztAQEBubm4REREeHh4nJyeoqKgLCwvQ0NCDg4MWFhY0NDTr6+tbW1vg4OCZmZnPBvjCAAABN0lEQVR4nO3cWVJCQRBFwQKZQZFJFBz2v0slJFyBRUU3mSs497frxYsAAAAAAAAAAAAAAAAAAAAgxWQ6GvZnNJ1c983mg14tZ5eB6+qMVOufhc/VEak2EYvqhmSLWFYnJNvGrjoh2T6qC9JZ2D4L22dh+yxsn4Xts7B9FrYvDtUFyQ4xqk5INopVdUKySXT+ULO9PJg+Vlckevp99J4eq0OS7F7+Dher8UN/xqubHn8AAAAAAID/0fvdotvb0/F6e+r+ftj3DXgY8VrdkGwSw+qEZG+xr05Idr6Db6KqA9JZ2D4L22dh+yxsn4Xts7B9d7DwVF2Q7NT5M81gsIxxdUKyRcS5uiHVJiLeqyNSXf5PE7OP6ow089n1Wf/zq8//RH3e9PgDAAAAAAAAAAAAAAAAAABwR74BUD07ZJeHcfMAAAAASUVORK5CYII="
                                    />
                                    {item}
                                  </div>
                                  <div className="c-pointer">
                                    <img
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAT0SURBVHic7Z29i11FGIefN4ggfqS1S5FeAik2yaYT3E0jWFiKEGzsYu//kHQ2KljbpYkbLP0sAmIppE+ZvSsELPa1uOeEbPbjnq+ZeWfu74Hp9pwZzvPswJ579h5zd0QczMyAz4A94DrwPvA38AT4xt3/WXQ+BRAHM7sCfAd8eM6PvAC+Bh64+/EicyqAGJjZDnAAXB7w4w+BT939v7nzXpp7AjGfTv5jhskH+Bj40czenDu3AiiMmd1gLf+9kYcuEoECKEgn/4Dx8ntmR6AACrGA/J5ZESiAApjZTZaR3zM5AgWQmQTyeyZFoAAyYma3WMt/N9EUoyNQAJno5P9EOvk9oyJQABkws13yyO8ZHIECSEwn/xH55PcMikABJKTAb/7rbIxAASTCzG6zlv9O4aVcGIECSMdV4O3Si+g4NwIFkAh3/wH4AojyceuZESiAhLj79wSPQM8DZMDM7gLfAlZ6LR0PgU/c/Vg7QAaC7gT3QDtAVoLtBC+Aa9oBMhJsJ3gL+FIBTMTMrk45LlgE1xXABLqbPH+Z2f0pxweK4AMFMJJO/iPWd/juVR7BMwUwgtfk99QcwRMFMJBz5PfUGsEB7q6xYQC3gaNO0kXj/ow57gLHA+ZYavwMWPGLG32MkF9TBM+BK+5O8QsceUyQX0MEh8DOy/lKX+SoA9idKD9yBCfkK4B08iNGcAjcODVP6YsdbSwoP1IEZ8pXAOnlR4jgXPkKII/8khGsgJsXnrv0hY8wMsgvEcFG+Qogr/ycEayAW4POWVrAlsnPEcFg+VsdQEH5KSNYAbujzlVaREH5q4LyU0RwNFb+VgYQSP6SEUyS7+7b9VBowX/U3MQDd/9qyoFm9jnw1N1/mXT8tgQQWH7P5AjmsBUPhFQgH2Y8VDKH5gPovpkjuvye7BE0HUDGr2VZkqwRNBtApfJ7skXQZACVy+/JEkFzATQivyd5BE39GdiY/J5/gWvu/jTFyZvZARqWfyeVfGgkgMblT7rDN5TqA5D8eVQdgOTPp9oAJH8ZqgxA8pejugAkf1neyD3hHBqWv+/uv5aYvJodQPLTUEUA3WtWJD8B4QN45R07kp+A0AFIfnrCBiD5eQgZgOTnI1wAkp+XUAE0Kv+IoPIhUAANy78TVT4ECUDyy1E8AMkvS9EAGr3DV418KBjAK/KXfot2SaqSD4U+DWxY/r67/1Z6IWPIvgNIfiyyBmBmN5D8UGQLoJN/gOSHIksAkh+X5AFIfmySBiD58UkWgOTXQZIAJL8eFg9A8uti0QAkvz4WC0Dy62SRACS/XmYHIPl1MysAya+fyR8HNyx/z91/L72QXEzaASS/HUYHYGY7SH4zjAqgk/8YyW+GwQFIfpsMCkDy22VjAJLfNhcGIPntc24Akr8dnBlAo/JXSP4pTgXQsPx9yT/NiQAkf/t4GUCjd/gkfwOX4IT8y2WXsyiSPwADWpW/5+5/lF5IdAx4juRvLcb6DdatIPkjKf4VMQsi+RNoJQDJn0gLAUj+DGoPQPJnUnMAkr8AtQYg+QtRYwCSvyC1BSD5C1NTAJKfgFoCkPxE1BCA5CckegCSn5jIbw5dAR+5+5+lF9IyUXcAyc9ExAAkPyPRApD8zEQKQPILECUAyS9EhAAkvyClA5D8wpQMQPIDUCqAQyQ/BCUCOGR9e1fyA5A7AMkPRs4AJD8g/wNzi7NgWL0dxgAAAABJRU5ErkJggg=="
                                      draggable="false"
                                      alt="edit"
                                      width="10"
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
