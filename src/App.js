// 导入路由表
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar";

export default function App() {
  // 使用useRoutes
  const route = useRoutes(routes);
  return (
    <div className={"bg-bgGreen example"}>
      <Navbar />
      {/*渲染匹配的组件 */}
      {route}
    </div>
  );
}
