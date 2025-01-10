"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useState } from "react";
export default function AboutPage() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex justify-center w-full">
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-xl w-full">
        <div className="col-span-3 p-4 relative">
          {/* Image with explicit height and width */}
          <img
            src="/assets/samam-logo.png"
            alt="Samam Logo"
            className="h-[450px] w-[700px] object-contain mx-auto opacity-10"
          />
          {/* Text overlay on top of the image */}
          <div className="absolute inset-0 flex items-center justify-center flex-col text-black border-4 border-red-200 rounded-lg">
          <h3 className="text-3xl font-semibold text-black">సత్యాన్వేషణ మండలి</h3>
            <p className=" mt-2 text-black">
              A journey to discover truth, wisdom, and societal harmony.
            </p>
          </div>
        </div>

        <div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 mx-auto">
    <img
      src="https://images.unsplash.com/photo-1529665730773-4f3fda31a5f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Founder Image"
      className="rounded-lg w-full object-cover h-auto "
    />
    <h1 className="text-center">Founder</h1>
  </div>
</div>

        <div className="col-span-3 sm:col-span-2 lg:col-span-2 mx-auto">
        <div className="text-lg text-gray-800 leading-relaxed">
      <p className="font-bold text-xl">సత్యాన్వేషణ మండలి</p>
      <p>
        సత్యం తెలియడం అనేది అవసరం మాత్రమే కాదు, అది ప్రతి మనిషి జీవితానికి పునాది. <br />
        <strong>సత్యం అంటే ఏమిటి? ఏది సత్యం? సత్యాన్ని ఎలా తెలుసుకోవడం?</strong> అన్న ఆలోచన ఆధారంగా
        స్థాపించబడిన సంస్థ సత్యాన్వేషణ మండలి. మండలి ప్రధాన లక్ష్యం ప్రజలలో “వాస్తవిక దృష్టి, సత్యాన్వేషణ,
        వివేకం, ధర్మాచరణ”లను పెంపొందించడం మరియు వ్యష్టి, సమష్టి, శ్రేయస్సుల పట్ల అవగాహన కల్పించడం.
        అందుకు పునాదిగా ఆధ్యాత్మికత, తాత్వికత, మరియు విజ్ఞాన శాస్త్రాలను సమన్వయం చేయడం ద్వారా
        మానవాభివృద్ధికి నూతన దారులను చూపిస్తుంది.
      </p>

      {!showMore && (
        <button
          onClick={toggleReadMore}
          className="mt-4 text-blue-500 underline focus:outline-none"
        >
          Read More
        </button>
      )}

      {showMore && (
        <>
          <p className="font-bold text-lg">మండలి ఆవిర్భావం</p>
      <p>
        సత్యాన్వేషణ మండలి ఏర్పడటానికి వెనుక ఒక ప్రేరణాత్మక కథ ఉంది. మానవ జీవిత లక్ష్యాలపై లోతైన
        ఆలోచనలతో, వివిధ తాత్విక ధోరణుల పరిశీలన, మరియు సమాజానికి సరి అయిన మార్గాలను సూచించాలన్న
        దృక్పథంతో మండలి ప్రారంభమైంది. ఇది వ్యక్తుల జీవితాల్లో స్ఫూర్తిని నింపడం ద్వారా సమాజాభివృద్ధి కోసం
        కృషి చేయడమే ప్రధాన లక్ష్యంగా పెట్టుకుంది.
      </p>

      <p className="font-bold text-lg">మండలి కార్యాచరణలు</p>
      <p>
        <strong>1. జ్ఞాన ప్రబోధన:</strong> <br />
        మండలి సత్యాన్ని శాస్త్రీయ పరిశీలన ద్వారా వెతుక్కోవడంపై దృష్టి పెట్టింది. వివిధ గ్రంథాల అధ్యయనం,
        తాత్విక చర్చలు, మరియు శాస్త్రీయ పరీక్షా విధానాలను ఉపయోగించి నిజమైన అవగాహన పెంపొందించే
        కార్యక్రమాలను నిర్వహిస్తుంది.
      </p>
      <p>
        <strong>2. సమాజ సేవ:</strong> <br />
        మండలి తన సమయాన్ని సమాజ సేవ కోసం కేటాయిస్తుంది. విద్యా కార్యక్రమాలు, సమాజంలో అసమానతల నివారణ
        కోసం చర్యలు, మరియు శిక్షణా తరగతులను నిర్వహిస్తుంది.
      </p>
      <p>
        <strong>3. తత్వ చర్చావేదికలు:</strong> <br />
        సత్యం, ఆధ్యాత్మికత, మరియు మానవ విలువలపై తాత్విక చర్చలకు వేదికగా మండలి నిలుస్తుంది. అనేక మంది
        మేధావులు, ఆలోచనాపరులు, మరియు తాత్విక ధోరణుల వారిని కలిపి, వారి దృక్పథాలను పంచుకోవడం మరియు
        సత్యాసత్యాల నిగ్గు తేల్చడం మండలి ప్రత్యేకత.
      </p>
      <p>
        <strong>4. ప్రచురణలు:</strong> <br />
        మండలి సత్యాన్వేషణకు సంబంధించిన పుస్తకాలు, వ్యాసాలు, మరియు పరిశోధనా నివేదికలను ప్రచురిస్తోంది.
        “వివేకపథం” పత్రిక ద్వారా ప్రజలలో ప్రకృతి మరియు సమాజం పట్ల అవగాహన పెంచడమే కాకుండా, వ్యక్తి
        జీవనశైలి మరియు సత్యాన్వేషణ పట్ల ఆసక్తిని పెంపొందించడానికి సహాయపడుతుంది.
      </p>
      <p>
        <strong>5. స్వతంత్ర ఆలోచన మరియు స్వయం సమర్థతపై శిక్షణ:</strong> <br />
        వ్యక్తులు స్వతంత్ర ఆలోచనా పరులుగాను మరియు స్వయం సమర్థులుగా మారి, తమ జీవితాలను సార్థకంగా
        మార్చుకోవడానికి మార్గదర్శకత్వాన్ని అందించడంలో మండలి కీలక పాత్ర పోషిస్తోంది. ప్రకృతి, సమాజం మరియు
        వ్యక్తిగత అభివృద్ధికై మనిషిని పురికొల్పే విధంగా వివిధ శిక్షణా కార్యక్రమాలు నిర్వహిస్తుంది.
      </p>

      <p className="font-bold text-lg">మండలి లక్ష్యాలు</p>
      <p>
        <strong>1. ధర్మమార్గంలో సమాజ శ్రేయస్సు:</strong> సమాజంలోని ప్రతి వ్యక్తి జీవితాన్ని సక్రమంగా,
        ఆరోగ్యంగా మార్చే దిశగా మండలి ప్రయత్నిస్తోంది.
      </p>
      <p>
        <strong>2. జ్ఞానవంతమైన సమాజం నిర్మాణం:</strong> విజ్ఞానం, వాస్తవిక పరిశీలన మరియు ధర్మాచరణ
        ద్వారా సమాజంలో ఐక్యత, సమరసత, మరియు శాంతిని తీసుకురావడానికి మండలి ప్రయత్నిస్తోంది.
      </p>
      <p>
        <strong>3. తరతరాలకు స్ఫూర్తి:</strong> యువతలో వివేకం, విజ్ఞానం, మరియు సమాజ సేవ పట్ల నిబద్ధతను
        ప్రోత్సహించడం.
      </p>

      <p className="font-bold text-lg">చివరగా…</p>
      <p>
        సత్యాన్వేషణ మండలి తన అన్వేషణా మార్గాలు మరియు ఆలోచనల ద్వారా సమాజంలో మార్పుకు దారి చూపుతోంది.
        ఇది ఒక నిరంతర తాత్విక వేదికగా నిలిచి, వ్యక్తుల జీవితాలను ప్రభావితం చేస్తూ, సమాజానికి ఉపయోగపడే
        మార్గాలను నిరంతరం అన్వేషిస్తుంది. "సత్యమే జీవితం - సత్యాన్వేషణే లక్ష్యం - ధర్మాచరణమే మార్గం" అనే
        సందేశాన్ని బలంగా ప్రతిపాదిస్తున్న ఈ మండలి ఆశయాలను ప్రతి ఒక్కరు అవగాహన చేసుకొని, వ్యక్తి, సమాజ
        నిర్మాణానికి పునాది రాళ్లవ్వడానికి సాదరంగా ఆహ్వానిస్తున్నాం.
      </p>
          <button
            onClick={toggleReadMore}
            className="mt-4 text-blue-500 underline focus:outline-none"
          >
            Show Less
          </button>
        </>
      )}
    </div>
        </div>
        <div className="col-span-3">
          <div >
          <h1 className='text-center text-2xl'>Members of organization</h1>

          </div>
          
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-4  lg:grid-cols-3'>

          
        <div className="w-[350px]  border-4 border-red-200 rounded-lg m-2 col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1  p-4 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
            alt="Article 2"
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-lg"
          />
          <h1 className="text-center">member-1</h1>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
            <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
          </div>
          <div className='flex space-x-4 ml-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-black' size={20} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-black' size={20} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-black' size={20} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-black' size={20} />
            </a>
          </div>
        </div>



        <div className="w-[350px]  border-4 border-red-200 rounded-lg   m-2  col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 p-4 mx-auto">
        
          <img
            src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
            alt="Article 2"
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-lg"
          />
          <h1 className="text-center">member-1</h1>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
            <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
          </div>
          <div className='flex space-x-4 ml-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-black' size={20} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-black' size={20} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-black' size={20} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-black' size={20} />
            </a>
          </div>
        </div>



        <div className="w-[350px]  border-4 border-red-200 rounded-lg  m-2  col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 p-4 mx-auto">
        
        <img
          src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
          alt="Article 2"
          width={500}
          height={300}
          className="object-cover w-full h-48 rounded-lg"
        />
        <h1 className="text-center">member-1</h1>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
          <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
        </div>
        <div className='flex space-x-4 ml-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-black' size={20} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-black' size={20} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-black' size={20} />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-black' size={20} />
          </a>
        </div>
      </div>



      <div className="w-[350px]  border-4 border-red-200 rounded-lg   m-2  col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 p-4 mx-auto">
        
        <img
          src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
          alt="Article 2"
          width={500}
          height={300}
          className="object-cover w-full h-48 rounded-lg"
        />
        <h1 className="text-center">member-1</h1>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
          <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
        </div>
        <div className='flex space-x-4 ml-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-black' size={20} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-black' size={20} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-black' size={20} />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-black' size={20} />
          </a>
        </div>
      </div>





        </div>
        </div>



        
        
        
        
        
      </div>
    </div>
  );
}
