import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography, Divider } from "antd";
const { Title } = Typography;
function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Title style={{height:'10rem'}} level={1} type="success">
        Welcome to Your App!
      </Title>
      <Divider>Hello</Divider>

      {user && (
        <>
          <Title style={{height:'10rem'}} level={2} type="success">
            {`${user.name} ${user.surname}`}
          </Title>
          <Divider>Edit Informations</Divider>

          <Link to="/profile">
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
