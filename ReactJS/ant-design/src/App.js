import "./App.css";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function App() {
  return (
    <div>
      <Button type="primary" loading shape="circle" icon={<SearchOutlined />} />
    </div>
  );
}

export default App;
