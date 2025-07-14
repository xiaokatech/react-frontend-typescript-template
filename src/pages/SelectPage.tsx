import { useEffect, useState } from "react";
import { Select } from "antd";

interface Product {
  id: number;
  name: string;
  description: string;
}

interface Region {
  id: number;
  name: string;
  parentRegion: number | null;
  products?: number[];
}

const mockData: Region[] = [
  {
    id: 1,
    name: "region 1",
    parentRegion: null,
  },
  {
    id: 2,
    name: "region 2",
    parentRegion: null,
    products: [],
  },
  {
    id: 3,
    name: "region 3",
    parentRegion: 1,
    products: [1, 2, 4],
  },
  {
    id: 4,
    name: "region 4",
    parentRegion: 1,
  },
];

export const SelectPage = () => {
  const parentRegions = mockData.filter((item: Region) => !item.parentRegion);
  //   const [regionsData, setRegionData] = useState<Region[]>(parentRegions);
  //   const [productsData, setProducrtsData] = useState<Product[]>([]);
  const [choices, setChoices] = useState<number[]>([]);

  const handleParentChange = (value: number) => {
    console.log(`selected ${value}`);
    console.log("choices", choices);
    if (choices.includes(value)) {
      return;
    } else {
      const newChoices = [value];
      console.log("newChoices", newChoices);
      setChoices(newChoices);
    }
  };

  const handleChange = (position: number) => (value: number) => {
    console.log(`selected ${value}`);
    console.log("choices", choices);
    if (choices.includes(value)) return;
    let newChoices = choices.slice(0, position);
    newChoices = [...newChoices, value];
    console.log("newChoices", newChoices);
    setChoices(newChoices);
  };

  useEffect(() => {
    console.log("choices", choices);
  }, [choices, choices.length]);

  return (
    <div className="page">
      <pre className="">{JSON.stringify(choices, null, 2)}</pre>

      <Select
        className="w-[400px]"
        onChange={handleParentChange}
        options={parentRegions.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        })}
      />

      {choices.map((regionId: number, index: number) => {
        // item: region value --> region 1

        const thisRegionData = mockData.filter(
          (item) => item.parentRegion === regionId
        );

        return (
          <div>
            <Select
              className="w-[400px]"
              onChange={handleChange(index + 1)}
              options={thisRegionData.map((item) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              })}
            />
          </div>
        );
      })}
    </div>
  );
};
