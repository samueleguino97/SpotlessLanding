import Head from "next/head";
import { Montserrat, Nunito } from "@next/font/google";
import Image from "next/image";
import { montserratFont } from "../utils";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotless - Limpieza</title>
        <meta name="description" content="Limpieza residencial y de oficina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-20">
        <h1
          className={classNames(
            "tracking-[0.095em] font-bold text-[#131313] text-4xl text-center max-w-[780px] mx-auto font-Montserrat"
          )}
        >
          TE PROPORCIONAMOS LOS{" "}
          <span className="font-black text-primary">MEJORES SERVICIOS</span> DE
          LIMPIEZA CON LA{" "}
          <span className="font-black text-primary">MEJOR ATENCION</span>
        </h1>
        <h2 className="tracking-[0.025em] text-2xl font-semibold text-center font-Montserrat max-w-5xl mt-6 mx-auto text-[#131313]">
          Nos esforzamos por hacer que la limpieza sea accesible y lujosa para
          todos, porque creemos que todos merecen tener espacios limpios y
          relajantes en los que vivir y trabajar.
        </h2>
        <div className="flex justify-center mt-6">
          <a
            className="flex items-center gap-4 px-6 py-4 font-bold tracking-widest text-white rounded-lg font-Montserrat bg-primary"
            href="https://wa.link/0xh0nj"
            target="_blank"
            rel="noreferrer"
          >
            CONTACTANOS
            <svg
              height="56.693px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              width="56.693px"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-6 h-6"
            >
              <g>
                <path
                  className="st0"
                  d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
                />
                <path
                  className="st0"
                  d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
                />
              </g>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}
