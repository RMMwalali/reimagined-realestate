import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Showcase2Card from "../components/showcase2-components/showcase2Card";
import { showCase } from "../constants/showcase";
import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";


const ShowCase2 = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // Separate images into categories
  const landImages = showCase.slice(0, 8);
  const siteDevelopmentImages = showCase.slice(8);

  return (
    <div className="overflow-hidden">
      <ShowCase2HeroSection />
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList className="flex justify-center p-2 bg-white rounded-lg">
        <Tab className="mx-2 py-3 px-6 text-xl title-font font-extrabold text-white bg-red-500 border-red-500 border-2 rounded-t-lg hover:bg-white hover:border-red-500 hover:text-red-500">
          Land
        </Tab>
        <Tab className="mx-2 py-3 px-6 text-xl title-font font-extrabold text-red-500 bg-white border-red-500 border-2 rounded-t-lg hover:text-white hover:bg-red-500 hover:border-red-500">
          Site Developments
        </Tab>
      </TabList>
        <TabPanel>
          {/* Land images */}
          <div className="grid grid-cols-3 gap-4">
            {landImages.map((e, i) => (
              <Showcase2Card
                href={`/projects/${e.id}`}
                src={e.coverImage}
                title={e.city}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          {/* Site Development images */}
          <div className="grid grid-cols-3 gap-4">
            {siteDevelopmentImages.map((e, i) => (
              <Showcase2Card
                href={`/projects/${e.id}`}
                src={e.coverImage}
                title={e.city}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShowCase2;
