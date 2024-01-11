import Image from "next/image";

const Features = () => {
  return (
    <section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div className="flex items-center flex-wrap mb-8 md:w-[70%] lg:w-[70%]">
      <div className="w-full md:w-1/2">
          <img src="./image1.jpeg" alt="Monitoring" />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h4 className="text-3xl text-gray-800 font-bold mb-3 md:items-center">Exercise Metric</h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch is able to capture your vitals while you exercise. You can create different categories of exercises and can track your vitals on the go.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-8 md:w-[70%] lg:w-[70%] md:mx-80">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src="./image2.jpeg" alt="Reporting" />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly, or yearly.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap md:w-[70%] lg:w-[70%] ">
      <div className="w-full md:w-1/2">
          <img src="image2.jpeg" alt="Syncing" />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android, or Windows OS and also to your laptop whether MacOS, GNU/Linux, or Windows OS.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
