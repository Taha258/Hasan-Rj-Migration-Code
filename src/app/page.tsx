import Image from "next/image";
import { FetchCarsData } from "../sanity/lib/fetchData";

export default async function Home() {
  let save: any = await FetchCarsData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Home page</h1>
        {save?.map((item: any) => (
          <div key={item._id} className="flex flex-col items-center gap-4">
            <h2 className="text-2xl">{item.name}</h2>
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={300}
              height={300}
            />
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

//last passwrod
// naveedahmed258427@gmail.com
// @tHnTAab9s5T!8Y

// naveed
// V##nCTE4xn#aPz#