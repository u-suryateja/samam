// app/page.tsx
import { getTranslations } from "next-intl/server";
import { Carousel } from 'antd';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }> ;
}) {
  const t = await getTranslations("HomePage");
  const g = await getTranslations("General");
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col  p-0 m-0 ">
      <section className="w-full h-[450px] ">
        <Carousel dots autoplay className="w-full h-full ">
          <div className="bg-red-700 flex justify-center items-center w-full h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="heo" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="bg-blue-700 flex justify-center items-center w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="this" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
