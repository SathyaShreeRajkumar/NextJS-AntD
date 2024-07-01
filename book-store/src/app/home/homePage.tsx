"use client";

import { Layout, Button, Carousel, Image } from "antd";
import { BookOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { HOME_CONST } from "@/constants/appConstants";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const router = useRouter();
  return (
    <Layout className="max-h-screen">
      <Header className="bg-blue-600 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">{HOME_CONST.TITTLE_LABEL}</div>
      </Header>
      <Content className="p-4 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {HOME_CONST.HEADER_LABEL}
          </h1>
          <Carousel autoplay>
            <div>
              <Image
                alt="Image1"
                src="https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&w=1920"
              />
            </div>
            <div>
              <Image
                alt="Image2"
                src="https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg?auto=compress&cs=tinysrgb&w=1920"
              />
            </div>
            <div>
              <Image
                alt="Image3"
                src="https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=1920"
              />
            </div>
          </Carousel>
        </div>
      </Content>
      <Footer className="text-center">
        <Button
          className="bg-blue-600 text-white text-xl w-auto h-12"
          onClick={() => router.push("/books")}
        >
         {HOME_CONST.BUTTON_LABEL}
        </Button>
      </Footer>
    </Layout>
  );
};

export default HomePage;
