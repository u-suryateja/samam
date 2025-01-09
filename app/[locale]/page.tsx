// app/page.tsx
import { getTranslations } from "next-intl/server";
import Slider from "./components/Slider";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("HomePage");
  const g = await getTranslations("General");
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-0 m-0">
      <section className="w-full h-[600px]">
        {/* Ensuring the Slider component takes up the correct space */}
        <Slider />
      </section>

      {/* Added margin-top to create space between the slider and the text */}
      <section className="mt-10 px-4">
        
      </section>
    </div>
  );
}
