import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setName,
  setSurname,
  setEmail,
  setPassword,
} from "../slices/userSlice";
import { Button, Form, Input, Col, Row, Avatar, Card, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function SignIn() {
  const user = useSelector((state) => state.user);
  console.log(user);

  const dispatch = useDispatch();

  return (
    <Card hoverable style={{ display: 'flex',height:'100vh',flexDirection:'column',justifyContent:'space-around' }}>
      <Row justify="center">
        <Avatar
          size={350}
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <Col span={8}>
          <Form {...layout}>
          <Title type="success" level={1}>
        Log In
      </Title>
            <Form.Item
              value={user.name}
              onChange={(e) => dispatch(setName(e.target.value))}
              label="Name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={user.surname}
              onChange={(e) => dispatch(setSurname(e.target.value))}
              label="Surname"
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={user.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              label="Email"
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={user.password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              label="Password"
            >
              <Input />
            </Form.Item>
            <Link to={"home"}>
              <Button>Login</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default SignIn;
