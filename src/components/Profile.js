import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setSurname,
  setEmail,
  setPassword,
} from "../slices/userSlice";
import { Button, Form, Input, Col, Row, Avatar, Card, Typography } from "antd";
import { EditOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const { Title } = Typography;

const buttonStyle = {
  display: "context",
  justifyContent:"end",
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialTempValue = [
    {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
    },
  ];

  const [tempValues, setTempValues] = useState([initialTempValue]);

  const handleNameChange = (e) => {
    setTempValues({ ...tempValues, name: e.target.value });
  };

  const handleSurnameChange = (e) => {
    setTempValues({ ...tempValues, surname: e.target.value });
  };

  const handleEmailChange = (e) => {
    setTempValues({ ...tempValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setTempValues({ ...tempValues, password: e.target.value });
  };

  const handleClick = () => {
    dispatch(setName(tempValues.name));
    dispatch(setSurname(tempValues.surname));
    dispatch(setEmail(tempValues.email));
    dispatch(setPassword(tempValues.password));
  };

  function handleLogout() {
    dispatch(setName(""));
    dispatch(setSurname(""));
    dispatch(setEmail(""));
    dispatch(setPassword(""));
  }
  return (
    <Card
      hoverable
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Row display="context">
        <Avatar
          size={350}
          style={{ backgroundColor: "#87d068" }}
          icon={<EditOutlined />}
        />
        <Col span={8}>
          <Form {...layout}>
            <Title type="success" level={1}>
              Edit
            </Title>
            <Form.Item label="Name">
              <Input value={tempValues.name} onChange={handleNameChange} />
            </Form.Item>
            <Form.Item label="Surname">
              <Input
                value={tempValues.surname}
                onChange={handleSurnameChange}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={tempValues.email} onChange={handleEmailChange} />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                value={tempValues.password}
                onChange={handlePasswordChange}
              />
            </Form.Item>
            <Row style={buttonStyle}>
                <Link to={"/home"}>
                  <Button
                    onClick={handleClick}
                    type="primary"
                    icon={<CheckOutlined />}
                  >
                    Edit
                  </Button>
                </Link>
                <Link to={"/home"}>
                  <Button danger icon={<CloseOutlined />}>
                    Reject
                  </Button>
                </Link>
                <Link to={"/"}>
                  <Button
                    onClick={handleLogout}
                    danger
                    icon={<CloseOutlined />}
                  >
                    Log Out
                  </Button>
                </Link>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default Profile;
